using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TextileSolution.Context
{
    public class TextileContext : DbContext
    {
        public TextileContext(DbContextOptions<TextileContext> options) : base(options)
        {

        }
        // Entities
        


        // stored procedure
       


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Entities
            



            // stored procedure

        }
    }
}
