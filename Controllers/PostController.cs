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
    public class PostController : ControllerBase
    {
        ApplicationDbContext db;
        private readonly ApplicationDbContext _applicationDbContetext;
        public PostController(ApplicationDbContext applicationdDbContext)
        {
            _applicationDbContetext = applicationdDbContext;
            this.db = applicationdDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Info()
        {
            var info = await _applicationDbContetext.Post.ToListAsync();
            return Ok(info);
        }
        [HttpGet("info")]

        public async Task<IActionResult> GetAsync(int idpost)
        {
            var cakes = await _applicationDbContetext.Post.Select(x => new
            {
                Idpost = x.Idpost,
                Nameconten = x.Nameconten,
                Imageconten = x.Imageconten,
                Author = x.Author,
                Writingdate = x.Writingdate,
                Describe = x.Describe,
                HtmlContent = x.HtmlContent,
                Advice = x.Advice
            }).Where(x => x.Idpost == idpost)
            .ToListAsync();
            return Ok(cakes);
        }
        [HttpGet]
        [Route("{idtree}")]
        public async Task<IActionResult> GetInfo(int treeidtree)
        {
            var cakes = await _applicationDbContetext.Post.Include(x => x.Tree).Select(x => new
            {
                Idpost = x.Idpost,
                Nameconten = x.Nameconten,
                Imageconten = x.Imageconten,
                Author = x.Author,
                Writingdate = x.Writingdate,
                TreeIdtree = x.TreeIdtree,
                HtmlContent = x.HtmlContent,
                Advice = x.Advice


            }).Where(x => x.TreeIdtree == treeidtree)
            .ToListAsync();
            return Ok(cakes);
        }

        // [HttpGet]
        // [Route("{idpost}")]
        // public async Task<IActionResult> Get(int treeidtree, int idpost)
        // {
        //     var cakes = await _applicationDbContetext.Post.Include(x => x.Tree).Select(x => new
        //     {
        //         Idpost = x.Idpost,
        //         Nameconten = x.Nameconten,
        //         Imageconten = x.Imageconten,
        //         Author = x.Author,
        //         Writingdate = x.Writingdate,
        //         TreeIdtree = x.TreeIdtree,

        //     }).Where(x => x.TreeIdtree == treeidtree , x.Idpost== idpost)
        //     .ToListAsync();
        //     return Ok(cakes);
        // }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Posts post)
        {
            if (!ModelState.IsValid) return BadRequest("lỗi");
            var posts = new Post()
            {
                Nameconten = post.Nameconten,
                Writingdate = DateTime.UtcNow,
                Imageconten = post.Imageconten,
                Author = post.Author,
                TreeIdtree = post.TreeIdtree,
                Describe = post.Describe,
                HtmlContent = post.HtmlContent,
                Advice = post.Advice


            };
            await _applicationDbContetext.Post.AddAsync(posts);
            await _applicationDbContetext.SaveChangesAsync();
            return Ok(post);
        }
        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            var contenToDelete = await _applicationDbContetext.Post.FindAsync(id);
            if (contenToDelete == null)
            {
                return NotFound();
            }
            _applicationDbContetext.Post.Remove(contenToDelete);
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
        public class Posts
        {
            // public string View { get; set; }

            public string Author { get; set; }

            public string Nameconten { get; set; }

            public string Imageconten { get; set; }
            public int TreeIdtree { get; set; }

            public string Describe { get; set; }
            public string HtmlContent { get; set; }
            public string Advice { get; set; }
        }
    }
}