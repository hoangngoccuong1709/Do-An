using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class Editpost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Advice",
                table: "Post",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Advice",
                table: "Post");
        }
    }
}
