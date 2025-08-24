using AutoMapper;
using CleanArchitecture.Application.DTOs;
using CleanArchitecture.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleanArchitecture.Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Entity-to-DTO mapping
            CreateMap<User, UserDto>();

            // DTO-to-Entity mapping (if needed)
            CreateMap<UserDto, User>();
            
            // UpdateUserDto to User mapping
            CreateMap<UpdateUserDto, User>();
        }
    }
}
