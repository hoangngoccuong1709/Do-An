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
    public class TreeController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public TreeController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var cakes = await _applicationDbContetext.Tree.Include(x => x.Plantlist).Select(x => new
            {
                Idtree = x.Idtree,
                Nametree = x.Nametree,
                Image = x.Image,
                Price = x.Price,
                Nameplantlist = x.Nameplantlist,
                Careday = x.Careday,
                Describe = x.Describe
            }
            )
            .ToListAsync();
            return Ok(cakes);
        }
        //  [HttpGet]
        //  [Route("get-id")]
        // public async Task<IActionResult> GetProductByIdAsync(int id)
        // {
        // 	var cake = await _applicationDbContetext.Tree.FindAsync(id);
        // 	return Ok(cake);
        // }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Trees tree)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            var posttree = new Tree()
            {
                Nametree = tree.Nametree,
                Careday = DateTime.UtcNow,
                Image = tree.Image,
                Nameplantlist = tree.Nameplantlist,
                Price = tree.Price,
                Describe = tree.Describe
            };
            await _applicationDbContetext.Tree.AddAsync(posttree);
            await _applicationDbContetext.SaveChangesAsync();
            return Ok(tree);
        }
        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contenToDelete = await _applicationDbContetext.Tree.FindAsync(id);
            if (contenToDelete == null)
            {
                return NotFound();
            }
            _applicationDbContetext.Tree.Remove(contenToDelete);
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
        public class Trees
        {
            public string Nametree { get; set; }
            public string Image { get; set; }
            public int Price { get; set; }
            public string Nameplantlist { get; set; }
            public string Describe { get; set; }
            // public DateTime Careday { get; internal set; }
        }
    }
}