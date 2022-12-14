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
    public class PlantingtoolController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public PlantingtoolController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var cakes = await _applicationDbContetext.Plantingtool.ToListAsync();
            return Ok(cakes);
        }
        // [HttpGet]
        // [Route("get-id")]
        // public async Task<IActionResult> GetProductByIdAsync(int id)
        // {
        //     var cake = await _applicationDbContetext.Plantingtool.FindAsync(id);
        //     return Ok(cake);
        // }
        [HttpGet]
        [Route("idtool")]
        public async Task<IActionResult> GetInfo(string nametool)
        {
            //var user = await userManager.FindByNameAsync(userName);
            var user2 = await db.Plantingtool.Select(u => new
            {
                u.Idplantingtool,
                u.Nametool,
                u.Describe,
                u.Imagetool,
                u.Price
            }).Where(u => u.Nametool == nametool)
            .FirstOrDefaultAsync();
            return Ok(user2);
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Plantool plantingtool)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            var posttool = new Plantingtool()
            {
                Nametool = plantingtool.Nametool,
                Imagetool = plantingtool.Imagetool,
                Classify = plantingtool.Classify,
                Price = plantingtool.Price,
                Describe = plantingtool.Describe
            };
            await _applicationDbContetext.Plantingtool.AddAsync(posttool);
            await _applicationDbContetext.SaveChangesAsync();
            return Ok(plantingtool);
        }
        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contenToDelete = await _applicationDbContetext.Plantingtool.FindAsync(id);
            if (contenToDelete == null)
            {
                return NotFound();
            }
            _applicationDbContetext.Plantingtool.Remove(contenToDelete);
            await _applicationDbContetext.SaveChangesAsync();
            return NoContent();
        }
        // [HttpPut]
        // public async Task<IActionResult> PutAsync(Product contenToUpdate)
        // {
        // 	_applicationDbContetext.Product.Update(contenToUpdate);
        // 	await _applicationDbContetext.SaveChangesAsync();
        // 	return NoContent();
        // }
        // [Route("{id}")]
        // [HttpDelete]
        // public async Task<IActionResult> DeleteAsync(int id)
        // {
        // 	var contenToDelete = await _applicationDbContetext.Product.FindAsync(id);
        // 	if (contenToDelete == null)
        // 	{
        // 		return NotFound();
        // 	}
        // 	_applicationDbContetext.Product.Remove(contenToDelete);
        // 	await _applicationDbContetext.SaveChangesAsync();
        // 	return NoContent();
        // }
        // [HttpGet]
        // [Route("idproduct")]
        //  public async Task<IActionResult> GetInfo(int id)
        //         {
        //             //var user = await userManager.FindByNameAsync(userName);
        //             var user2 = await db.Product.Select(u => new
        //             {
        // 				u.Idproduct,
        //                 u.NameProduct,
        //                 u.Title,
        //                 u.Image,
        //                 u.Price
        //                 // u.Email,
        //                 // u.PhoneNumber
        //             }).Where(u => u.Idproduct == id)
        //             .FirstOrDefaultAsync();
        //             return Ok(user2);
        //         }
        //     }
        public class Plantool
        {
            public string Nametool { get; set; }
            public string Imagetool { get; set; }
            public int Price { get; set; }

            public string Classify { get; set; }
            public string Describe { get; set; }
            // public DateTime Careday { get; internal set; }
        }
    }
}