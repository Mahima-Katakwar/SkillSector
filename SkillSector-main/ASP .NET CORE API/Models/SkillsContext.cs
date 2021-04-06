using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace SkillSectorCoreApi.Models
{
    public partial class SkillsContext : DbContext
    {
        //public SkillsContext()
        //{
        //}

        public SkillsContext(DbContextOptions<SkillsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ProgrammerDetail> ProgrammerDetails { get; set; }
        public virtual DbSet<ProgrammerInformation> ProgrammerInformations { get; set; }
        public virtual DbSet<ProgrammerInformationList> ProgrammerInformationLists { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(LocalDB)\\MSSQLLocalDB;Database=Skills;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<ProgrammerDetail>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Programm__B9BE370F7C2D7C29");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("city");

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("company");

                entity.Property(e => e.Date)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Imagesrc)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("imagesrc");

                entity.Property(e => e.Links)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("links");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("location");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.PhoneNo)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("phone_no");

                entity.Property(e => e.Resume)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("resume");

                entity.Property(e => e.Skills)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("skills");

                entity.Property(e => e.StreetAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("street_address");

                entity.Property(e => e.Tags)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("tags");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("type");

                entity.Property(e => e.Zipcode)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("zipcode");
            });

            modelBuilder.Entity<ProgrammerInformation>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Programm__B9BE370F6B5C6B3F");

                entity.ToTable("ProgrammerInformation");

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("user_id");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .HasColumnName("city");

                entity.Property(e => e.Company)
                    .HasMaxLength(50)
                    .HasColumnName("company");

                entity.Property(e => e.Date)
                    .HasMaxLength(50)
                    .HasColumnName("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Imagesrc)
                    .HasMaxLength(500)
                    .HasColumnName("imagesrc");

                entity.Property(e => e.Links)
                    .HasMaxLength(500)
                    .HasColumnName("links");

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .HasColumnName("location");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(50)
                    .HasColumnName("phone_no");

                entity.Property(e => e.Resume)
                    .HasMaxLength(500)
                    .HasColumnName("resume");

                entity.Property(e => e.Skills)
                    .HasMaxLength(50)
                    .HasColumnName("skills");

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(50)
                    .HasColumnName("street_address");

                entity.Property(e => e.Tags)
                    .HasMaxLength(50)
                    .HasColumnName("tags");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .HasColumnName("type");

                entity.Property(e => e.Zipcode)
                    .HasMaxLength(50)
                    .HasColumnName("zipcode");
            });

            modelBuilder.Entity<ProgrammerInformationList>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__Programm__B9BE370FD89AFC45");

                entity.ToTable("ProgrammerInformationList");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.City)
                    .HasMaxLength(50)
                    .HasColumnName("city");

                entity.Property(e => e.Company)
                    .HasMaxLength(50)
                    .HasColumnName("company");

                entity.Property(e => e.Date)
                    .HasMaxLength(50)
                    .HasColumnName("date");

                entity.Property(e => e.Description)
                    .HasMaxLength(1000)
                    .HasColumnName("description");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Imagesrc)
                    .HasMaxLength(500)
                    .HasColumnName("imagesrc");

                entity.Property(e => e.Links)
                    .HasMaxLength(500)
                    .HasColumnName("links");

                entity.Property(e => e.Location)
                    .HasMaxLength(50)
                    .HasColumnName("location");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.Property(e => e.PhoneNo)
                    .HasMaxLength(50)
                    .HasColumnName("phone_no");

                entity.Property(e => e.Resume)
                    .HasMaxLength(500)
                    .HasColumnName("resume");

                entity.Property(e => e.Skills)
                    .HasMaxLength(50)
                    .HasColumnName("skills");

                entity.Property(e => e.StreetAddress)
                    .HasMaxLength(50)
                    .HasColumnName("street_address");

                entity.Property(e => e.Tags)
                    .HasMaxLength(50)
                    .HasColumnName("tags");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .HasColumnName("type");

                entity.Property(e => e.Zipcode)
                    .HasMaxLength(50)
                    .HasColumnName("zipcode");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
