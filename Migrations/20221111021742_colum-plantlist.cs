using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class columplantlist : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Nameplantlist",
                table: "Plantlist",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<string>(
                name: "Describe",
                table: "Plantlist",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Describe",
                table: "Plantlist");

            migrationBuilder.AlterColumn<int>(
                name: "Nameplantlist",
                table: "Plantlist",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }
    }
}
