using Do_An.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;

namespace Do_An.Controller
{
    [Route("api/[controller]")]
    public class SubscribeController : ControllerBase
    {
        ApplicationDbContext db;
        public SubscribeController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // get all data 
        [HttpGet]
        public async Task<IActionResult> getAllInfo()
        {
            var info = await db.Subscribe.ToListAsync();
            return Ok(info);
        }

        // add data
        [HttpPost]
        public async Task<ActionResult<Subscribe>> CreateSubscribe([FromBody] Subscribe info)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("lỗi");
            };

            await db.Subscribe.AddAsync(info);
            await db.SaveChangesAsync();
            return Ok(info);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getInforById(int id)
        {

            var check = await db.Subscribe.FindAsync(id);
            return Ok(check);
        }


        [HttpDelete("{id}")]

        public async Task<IActionResult> deleteSubscribe(int id)
        {
            var check = await db.Subscribe.FindAsync(id);
            if (check != null)
            {
                db.Subscribe.Remove(check);
                await db.SaveChangesAsync();
                return Ok(new { success = true });
            }
            return NotFound();
        }

        //edit subscribe by id
        [HttpPut("{id}")]
        public async Task<IActionResult> updateSubscribe(int id, [FromBody] Subscribe subscribe)
        {
            var sub = db.Subscribe.Find(id);
            if (!ModelState.IsValid)
            {
                return BadRequest("k có subscribe");
            }
            sub.name = subscribe.name;
            sub.email = subscribe.email;
            sub.message = subscribe.message;
            sub.updateAt = subscribe.updateAt;
            await db.SaveChangesAsync();
            return Ok(1);
        }
        [HttpPost("emails")]

        public async Task<IActionResult> getAllEmail([FromBody] SendEmail data)

        {
            var newData = new SendEmail
            {
                SendNameEmail = data.SendNameEmail,
                Title = data.Title,
                Content = data.Content
            };


            var ListEmail = await db.Subscribe.Select(x => x.email).ToListAsync();

            var dataEmails = await db.SMTPs.Select(u =>
            new DataEmailSend()
            {
                Email = u.Email,
                name = u.name,
                PassSMTP = u.PassSMTP,
                Status = u.Status
            }).Where(u => u.Email == $"{newData.SendNameEmail}").FirstOrDefaultAsync();
            // return DataEmailSend();

            // List<string> Emails = new List<string>();
            foreach (var item in ListEmail)
            {
                try
                {
                    var fromAddress = new MailAddress(dataEmails.Email, dataEmails.name);
                    var test = new MailAddress(item, "hello");
                    //string fromPassword = "lndfzjdesekcytrg";
                    string fromPassword = dataEmails.PassSMTP;
                    string subject = newData.Content;
                    string body = newData.Title;

                    var smtp = new SmtpClient
                    {
                        Host = "smtp.gmail.com",
                        Port = 587,
                        EnableSsl = true,
                        DeliveryMethod = SmtpDeliveryMethod.Network,
                        UseDefaultCredentials = false,
                        Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                    };
                    using (var message = new MailMessage(fromAddress, test)
                    {
                        Subject = subject,
                        Body = body
                    })
                    {
                        smtp.Send(message);
                    }

                }
                catch (Exception e)
                {
                    throw e;
                }

            }
            return Ok("send Success");
        }

    }
}