using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class suacolumplanlist : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plantlist_Tree_Idtree",
                table: "Plantlist");

            migrationBuilder.DropIndex(
                name: "IX_Plantlist_Idtree",
                table: "Plantlist");

            migrationBuilder.DropColumn(
                name: "Idtree",
                table: "Plantlist");

            migrationBuilder.AddColumn<int>(
                name: "TreeIdtree",
                table: "Plantlist",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Plantlist_TreeIdtree",
                table: "Plantlist",
                column: "TreeIdtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Plantlist_Tree_TreeIdtree",
                table: "Plantlist",
                column: "TreeIdtree",
                principalTable: "Tree",
                principalColumn: "Idtree");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plantlist_Tree_TreeIdtree",
                table: "Plantlist");

            migrationBuilder.DropIndex(
                name: "IX_Plantlist_TreeIdtree",
                table: "Plantlist");

            migrationBuilder.DropColumn(
                name: "TreeIdtree",
                table: "Plantlist");

            migrationBuilder.AddColumn<int>(
                name: "Idtree",
                table: "Plantlist",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Plantlist_Idtree",
                table: "Plantlist",
                column: "Idtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Plantlist_Tree_Idtree",
                table: "Plantlist",
                column: "Idtree",
                principalTable: "Tree",
                principalColumn: "Idtree",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
