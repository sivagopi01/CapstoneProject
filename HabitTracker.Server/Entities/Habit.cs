using System.ComponentModel.DataAnnotations;

namespace HabitTracker.Server.Entities
{
    public class Habit
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
