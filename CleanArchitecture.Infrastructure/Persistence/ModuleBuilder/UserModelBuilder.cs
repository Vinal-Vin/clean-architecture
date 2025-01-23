using CleanArchitecture.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace CleanArchitecture.Infrastructure.Persistence.ModuleBuilder
{
    public class UserModelBuilder
    {
        public ModelBuilder Init(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<User>()
            //    .Property(e => e.DateOfBirth)
            //    .HasColumnType("datetime");

            modelBuilder
                .Entity<User>()
                .HasData(
                    new List<User>
                    {
                        new()
                        {
                            Id = 1,
                            Name = "admin",
                            Email = "admin@admin.com",
                            DateOfBirth = new DateTime(1992, 5, 15)
                        },
                        new()
                        {
                            Id = 2,
                            Name = "admin2",
                            Email = "admin2@admin.com",
                            DateOfBirth = new DateTime(2024, 5, 15)
                        }
                    }
                );

            return modelBuilder;
        }
    }
}
