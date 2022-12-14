using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Post
    {
        [Key]
        public int Idpost { get; set; }

        // public string View { get; set; }

        public string Author { get; set; }

        public string Nameconten { get; set; }

        public DateTime Writingdate { get; set; }

        public string Imageconten { get; set; }

        public string Describe { get; set; }

        [DisplayFormat(HtmlEncode = true)]
        [Display(Name = "HTML Content")]
        public string HtmlContent { get; set; }

        public int TreeIdtree { get; set; }
        // public int Idtree { get; set; }
        // [ForeignKey("Idtree")]
        // public virtual Tree Tree { get; set; }
        public virtual ICollection<Tree> Tree { get; set; }
    }

}