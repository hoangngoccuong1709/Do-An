using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class columpost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Post_Tree_Idtree",
                table: "Post");

            migrationBuilder.DropIndex(
                name: "IX_Post_Idtree",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "Idtree",
                table: "Post");

            migrationBuilder.AddColumn<int>(
                name: "TreeIdtree",
                table: "Post",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Post_TreeIdtree",
                table: "Post",
                column: "TreeIdtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Post_Tree_TreeIdtree",
                table: "Post",
                column: "TreeIdtree",
                principalTable: "Tree",
                principalColumn: "Idtree");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Post_Tree_TreeIdtree",
                table: "Post");

            migrationBuilder.DropIndex(
                name: "IX_Post_TreeIdtree",
                table: "Post");

            migrationBuilder.DropColumn(
                name: "TreeIdtree",
                table: "Post");

            migrationBuilder.AddColumn<int>(
                name: "Idtree",
                table: "Post",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Post_Idtree",
                table: "Post",
                column: "Idtree");

            migrationBuilder.AddForeignKey(
                name: "FK_Post_Tree_Idtree",
                table: "Post",
                column: "Idtree",
                principalTable: "Tree",
                principalColumn: "Idtree",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
