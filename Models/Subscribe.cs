namespace Do_An.Models
{
    public class Subscribe
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string message { get; set; }
        public DateTime? createAt { get; set; }
        public DateTime? updateAt { get; set; }
    }
}