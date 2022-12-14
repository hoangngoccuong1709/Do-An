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
    public class TooltypeController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public TooltypeController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var cakes = await _applicationDbContetext.Tooltypes.ToListAsync();
            return Ok(cakes);
        }
        //  [HttpGet]
        //  [Route("get-id")]
        // public async Task<IActionResult> GetProductByIdAsync(int id)
        // {
        // 	var cake = await _applicationDbContetext.Tree.FindAsync(id);
        // 	return Ok(cake);
        // }
        //         [HttpPost]
        //         public async Task<IActionResult> PostAsync([FromBody] Plantlists plantlist)
        //         {
        //             if (!ModelState.IsValid) return BadRequest("lỗi");
        //             var postplantlist = new Plantlist()
        //             {
        //                 Nameplantlist = plantlist.Nameplantlist,
        //                 Describe = plantlist.Describe,

        //             };
        //             await _applicationDbContetext.Plantlist.AddAsync(postplantlist);
        //             await _applicationDbContetext.SaveChangesAsync();
        //             return Ok(plantlist);
        //         }
        //         [Route("{id}")]
        //         [HttpDelete]
        //         public async Task<IActionResult> DeleteAsync(int id)
        //         {
        //             var contenToDelete = await _applicationDbContetext.Plantlist.FindAsync(id);
        //             if (contenToDelete == null)
        //             {
        //                 return NotFound();
        //             }
        //             _applicationDbContetext.Plantlist.Remove(contenToDelete);
        //             await _applicationDbContetext.SaveChangesAsync();
        //             return NoContent();
        //         }
        //         public class Plantlists
        //         {
        //             public string Nameplantlist { get; set; }
        //             public string Describe { get; set; }
        //             // public string Image { get; set; }
        //             // public int Price { get; set; }
        //             // public string Plantlistname { get; set; }
        //             // public string Describe { get; set; }
        //             // public DateTime Careday { get; internal set; }
        //         }
    }
}