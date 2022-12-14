using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Do_An.Models;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public OrderController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var products = _applicationDbContetext.Order.Include(x => x.OrderDetail)
            .Select(x => new
            {
                Id = x.Idorder,
                date = x.DateSetUp,
                quantity = x.OrderDetail.Select(x => x.Quantity),
                Orderid = x.OrderDetail.Select(x => x.Id),
                total = x.TotalMoney,
                status = x.OrderDetail.Select(x => x.Stattus),
                fullname = x.User.FullName,
                phonenumber = x.User.PhoneNumber,
                adress = x.User.Address,
                nameproduct = x.OrderDetail.Select(a => a.Plantingtool.Nametool)
            }
            ).ToList();
            return Ok(products);


        }
        [HttpGet]
        [Route("idorder")]
        public async Task<IActionResult> GetInfo(int id)
        {
            //var user = await userManager.FindByNameAsync(userName);
            var user2 = await db.Order.Select(u => new
            {
                u.Idorder,
                //u.Idproduct,
                u.TotalMoney,
                u.DateSetUp,
                // u.Email,
                // u.PhoneNumber
            }).Where(u => u.Idorder == id)
            .FirstOrDefaultAsync();
            return Ok(user2);
        }
        [HttpGet]
        [Route("getorders")]
        public async Task<IActionResult> GetOrders()
        {
            var orders = _applicationDbContetext.Order.ToList();
            return Ok(orders);
        }
        [HttpGet]
        [Route("test")]
        public async Task<IActionResult> Test()
        {
            var orders = _applicationDbContetext.Users.ToList();
            return Ok(orders);
        }


        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] BodyOrder body)
        {
            var orderDetails = new List<OrderDetail>();
            if (!ModelState.IsValid) return BadRequest("lỗi");

            var order = new Order()
            {
                DateSetUp = DateTime.UtcNow,
                Quantity = body.Quantity,
                TotalMoney = body.TotalMoney,
                UserId = body.UserId,
            };


            foreach (var item in body.orderDetails)
            {
                orderDetails.Add(new OrderDetail
                {
                    Idplantingtool = item.Idplantingtool,
                    Price = item.Price,
                    Quantity = item.Quantity,
                    Stattus = "Chờ Xác Nhận",
                    UserId = body.UserId
                });
            }
            order.OrderDetail = orderDetails;
            // var OrderDetailNews = new List<OrderDetail>();
            // OrderDetailNews.Add(new OrderDetail
            // {

            //     // ProductId = body.Idproduct,
            //     Quantity = body.Quantity,
            //     Price = body.Price,
            //     UserId = body.UserId,
            //     // OrderId = body.Id,

            // });
            // order.OrderDetails = OrderDetailNews;
            try
            {
                await _applicationDbContetext.Order.AddAsync(order);
                await _applicationDbContetext.SaveChangesAsync();
            }
            catch (Exception ex) { }
            return Ok(body);
        }

        //     [HttpGet]
        // public async Task<IActionResult> GetAsync()
        // {
        // 	var cakes = await _applicationDbContetext.Product.ToListAsync();
        // 	return Ok(cakes);
        // }
        // [HttpPut]
        // public async Task<IActionResult> PutAsync([FromBody] BodyOrder model)
        // {
        //     var found = _applicationDbContetext.Orders.FirstOrDefault(o => o.Id == model.OrderId);
        //     if (found != null)
        //     {
        //         found.Idproduct = model.Idproduct;
        //         // sửa thì k phải sua id mo 
        //         // found ni là mình lấy từ db ra nên gán hấn cho cấy mình truyền từ client
        //         found.Quantity = model.Quantity;
        //         found.Total = model.Total;
        //         found.UserId = model.UserId;
        //         await _applicationDbContetext.SaveChangesAsync();
        //     }

        //     return Ok(found);
        // }

        public class BodyOrder
        {
            public int Idorder { get; set; }
            public string UserId { get; set; }
            public int Quantity { get; set; }
            public float TotalMoney { get; set; }
            //        public float Price { get; set; }
            public ICollection<OrderDetail> orderDetails;
        }
        public class Body
        {

            public string status { get; set; }
        }

        [HttpGet]
        [Route("get-by-id")]
        public async Task<IActionResult> GetCakeByIdAsync(string fullname)
        {
            var products = _applicationDbContetext.Order.Include(x => x.OrderDetail)
           .Select(x => new
           {
               Id = x.Idorder,
               date = x.DateSetUp,
               quantity = x.Quantity,
               total = x.TotalMoney,
               fullname = x.User.FullName,
               phonenumber = x.User.PhoneNumber,
               adress = x.User.Description,
               nameproduct = x.OrderDetail.Select(a => a.Plantingtool.Nametool),
           }
           ).Where(p => p.fullname == fullname)
            //    .OrderBy(p => p.date)
            //     .ThenByDescending(p => p.date)
               .ToList();  // Sắp xếp giảm dần, tăng dần là OrderBy
                           // .Max(c => c.Idconten);


            // var cake = await _applicationDbContetext.Contens.FindAsync(Posion);
            return Ok(products);
        }
        // [HttpPut]
        // public async Task<IActionResult> update([FromBody] Update up)
        // {
        //     var cust = (from c in db.OrderDetail where c.Id == up.Id select c);
        //     // var sub = _applicationDbContetext.OrderDetails.Find(id);
        //     // if (!ModelState.IsValid)
        //     // {
        //     //     return BadRequest("k có giá trị");
        //     // }
        //     foreach (var c in cust)
        //     {
        //         c.Stattus = up.Stattus;
        //     }
        //     // sub.Stattus = status;

        //     await db.SaveChangesAsync();
        //     return Ok(cust);
        // }
        [HttpPut("{id}")]
        public async Task<IActionResult> updateSubscribe(int id, [FromBody] Update up)
        {
            var sub = db.OrderDetail.Find(id);
            if (!ModelState.IsValid)
            {
                return BadRequest("k có subscribe");
            }
            sub.Stattus = up.Stattus;
            await db.SaveChangesAsync();
            return Ok(1);
        }
        public class Update
        {
            public int Id { get; set; }
            public string Stattus { get; set; }
        }
    }
}