using System.Collections.Generic;
using Do_An.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Do_An
{
    public class ApplicationDbContext : IdentityDbContext<User, IdentityRole, string>
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Tree> Tree { get; set; }
        public DbSet<Plantingtool> Plantingtool { get; set; }
        public DbSet<Plantlist> Plantlist { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderDetail> OrderDetail { get; set; }
        public DbSet<Tooltype> Tooltypes { get; set; }
        public DbSet<Subscribe> Subscribe { get; set; }
        public DbSet<SMTPs> SMTPs { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // builder.Entity<TodoItem>()
            //     .HasOne<TodoList>(e => e.List)
            //     .WithMany(e => e.Items)
            //     .HasForeignKey(e => e.ListId);

            // builder.Entity<TodoItem>()
            //     .HasIndex(e => e.Title)
            //     .IsUnique();

        }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //     => optionsBuilder.UseNpgsql("DefaultConnection");

    }
}