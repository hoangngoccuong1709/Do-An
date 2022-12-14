using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class pllantingtool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plantingtool_Tree_Idtree",
                table: "Plantingtool");

            migrationBuilder.DropIndex(
                name: "IX_Plantingtool_Idtree",
                table: "Plantingtool");

            migrationBuilder.DropColumn(
                name: "Idtree",
                table: "Plantingtool");

            migrationBuilder.AddColumn<string>(
                name: "Classify",
                table: "Plantingtool",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "TreeIdtree",
                table: "Plantingtool",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Plantingtool_TreeIdtree",
                table: "Plantingtool",
                column: "TreeIdtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Plantingtool_Tree_TreeIdtree",
                table: "Plantingtool",
                column: "TreeIdtree",
                principalTable: "Tree",
                principalColumn: "Idtree");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Plantingtool_Tree_TreeIdtree",
                table: "Plantingtool");

            migrationBuilder.DropIndex(
                name: "IX_Plantingtool_TreeIdtree",
                table: "Plantingtool");

            migrationBuilder.DropColumn(
                name: "Classify",
                table: "Plantingtool");

            migrationBuilder.DropColumn(
                name: "TreeIdtree",
                table: "Plantingtool");

            migrationBuilder.AddColumn<int>(
                name: "Idtree",
                table: "Plantingtool",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Plantingtool_Idtree",
                table: "Plantingtool",
                column: "Idtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Plantingtool_Tree_Idtree",
                table: "Plantingtool",
                column: "Idtree",
                principalTable: "Tree",
                principalColumn: "Idtree",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
