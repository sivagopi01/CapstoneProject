using HabitTracker.Server.Entities;
using Microsoft.EntityFrameworkCore;

namespace HabitTracker.Server.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options):base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Habit> Habits { get; set; }
    }
}
