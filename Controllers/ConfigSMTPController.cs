using Do_An.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;

namespace Do_An.Controller
{
    [Route("api/[controller]")]
    public class ConfigSMTPController : ControllerBase
    {
        ApplicationDbContext db;
        public ConfigSMTPController(ApplicationDbContext db)
        {
            this.db = db;
        }

        // get all data 
        [HttpGet]
        public async Task<IActionResult> getAllConfig()
        {
            var info = await db.SMTPs.ToListAsync();
            return Ok(info);
        }

        // add data
        [HttpPost]
        public async Task<ActionResult<SMTPs>> CreateSMTP([FromBody] SMTPs smtp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("lỗi");
            };

            await db.SMTPs.AddAsync(smtp);
            await db.SaveChangesAsync();
            return Ok(smtp);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getInforById(int id)
        {

            var check = await db.SMTPs.FindAsync(id);
            return Ok(check);
        }


        [HttpDelete("{id}")]

        public async Task<IActionResult> deleteSMTPs(int id)
        {
            var check = await db.SMTPs.FindAsync(id);
            if (check != null)
            {
                db.SMTPs.Remove(check);
                await db.SaveChangesAsync();
                return Ok(new { success = true });
            }
            return NotFound();
        }
        //edit SMTP by id
        [HttpPut("{id}")]
        public async Task<IActionResult> updateSubscribe(int id, [FromBody] SMTPs smtp)
        {
            var sub = db.SMTPs.Find(id);
            if (!ModelState.IsValid)
            {
                return BadRequest("k có data");
            }
            sub.name = smtp.name;
            sub.Email = smtp.Email;
            sub.PassSMTP = smtp.PassSMTP;
            sub.Status = smtp.Status;
            sub.UpdateAt = smtp.UpdateAt;
            await db.SaveChangesAsync();
            return Ok(1);
        }

    }
}