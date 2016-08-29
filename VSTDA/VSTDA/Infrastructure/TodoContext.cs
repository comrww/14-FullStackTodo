using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.Models;

namespace VSTDA.Infrastructure
{
    public class TodoContext : DbContext
    {
        public TodoContext() : base("Todos")
        {

        }
        public IDbSet<Todo> Todoes { get; set; }
    }
}