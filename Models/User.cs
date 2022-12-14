
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Do_An.Models;
using Microsoft.AspNetCore.Identity;
namespace Do_An
{

    public class User : IdentityUser
    {
        //     public string Avatars { get; set; }

        public string Description { get; set; }

        [MaxLength(100)]
        public string FullName { get; set; }

        public string Address { get; set; }

        public DateTime CreatedDate { get; set; }
        public virtual ICollection<Order> Order { get; set; }

    }

}