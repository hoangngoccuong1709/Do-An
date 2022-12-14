using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Do_An.Migrations
{
    public partial class posst : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Post_Tree_TreeIdtree",
                table: "Post");

            migrationBuilder.DropIndex(
                name: "IX_Post_TreeIdtree",
                table: "Post");

            migrationBuilder.AlterColumn<int>(
                name: "TreeIdtree",
                table: "Post",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "PostTree",
                columns: table => new
                {
                    PostIdpost = table.Column<int>(type: "integer", nullable: false),
                    TreeIdtree = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PostTree", x => new { x.PostIdpost, x.TreeIdtree });
                    table.ForeignKey(
                        name: "FK_PostTree_Post_PostIdpost",
                        column: x => x.PostIdpost,
                        principalTable: "Post",
                        principalColumn: "Idpost",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PostTree_Tree_TreeIdtree",
                        column: x => x.TreeIdtree,
                        principalTable: "Tree",
                        principalColumn: "Idtree",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PostTree_TreeIdtree",
                table: "PostTree",
                column: "TreeIdtree");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PostTree");

            migrationBuilder.AlterColumn<int>(
                name: "TreeIdtree",
                table: "Post",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

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
    }
}
