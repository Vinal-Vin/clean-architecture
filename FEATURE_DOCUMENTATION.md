# User Profile Update Feature

This implementation extends the User management feature to include updating user details with First Name, Last Name, and Address fields.

## Changes Made

### Backend Changes

1. **User Entity Update** - Extended `CleanArchitecture.Core.Entities.User` to include:
   - `FirstName` property
   - `LastName` property
   - `Address` property
   - Computed `Name` property for backward compatibility

2. **UserDto Update** - Extended `CleanArchitecture.Application.DTOs.UserDto` to match new entity structure

3. **UpdateUserDto** - Created new DTO for update operations (`CleanArchitecture.Application.DTOs.UpdateUserDto`)

4. **Repository Layer** - Added `UpdateAsync` method to:
   - `CleanArchitecture.Core.Interfaces.IUserRepository`
   - `CleanArchitecture.Infrastructure.Repositories.UserRepository`

5. **Service Layer** - Added `UpdateUserAsync` method to `CleanArchitecture.Application.Services.UserService`

6. **API Controller** - Added PUT endpoint in `CleanArchitecture.API.Controllers.UsersController`

7. **AutoMapper** - Updated mapping profile to handle new DTOs

### Frontend Changes

1. **Type Definitions** - Created TypeScript interfaces in `types/user.ts`

2. **API Service** - Extended `services/userService.ts` with `updateUser` function

3. **User Edit Form** - Created `components/UserEditForm.tsx` with:
   - Form validation
   - Error handling
   - Loading states
   - Cancel functionality

4. **User Details Page** - Enhanced to show all user fields with edit button

5. **Edit Page Route** - Created `/users/[id]/edit` page

6. **Component Updates** - Updated UserCard and UserList to handle new field structure

7. **Navigation Fixes** - Replaced HTML anchor tags with Next.js Link components

## API Endpoints

### GET /api/users
Returns list of users with new fields

### GET /api/users/{id}
Returns specific user with all fields

### PUT /api/users/{id}
Updates user profile
```json
{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "address": "string"
}
```

## Usage

1. **View Users**: Navigate to `/users` to see user list
2. **View Details**: Click "View Details" on any user card
3. **Edit User**: Click "Edit User" on user details page
4. **Update**: Fill form and click "Update User" to save changes

## Development Notes

- Backend requires .NET 9.0 SDK for local development
- Frontend gracefully handles API connection errors
- All changes maintain backward compatibility
- Minimal approach used to extend existing functionality