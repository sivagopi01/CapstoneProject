using System.ComponentModel.DataAnnotations;

namespace HabitTracker.Server.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string UserName { get; set; }
        public string? FathersName { get; set; }
        public required string Gender { get; set; }
        public long MobileNumber { get; set; }
        public string? Password { get; set; }
    }
}
