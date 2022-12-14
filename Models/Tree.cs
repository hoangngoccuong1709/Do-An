using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Do_An.Models
{

    public class Tree
    {
        [Key]
        public int Idtree { get; set; }

        public string Nametree { get; set; }

        public string Image { get; set; }

        public int Price { get; set; }
        public string Nameplantlist { get; set; }

        public DateTime Careday { get; set; }

        public string Describe { get; set; }
        public virtual ICollection<Post> Post { get; set; }
        public virtual ICollection<Plantlist> Plantlist { get; set; }
        public virtual ICollection<Plantingtool> Plantingtool { get; set; }

    }

}