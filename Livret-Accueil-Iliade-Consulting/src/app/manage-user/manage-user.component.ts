import { Component, OnInit } from '@angular/core';
import { UpdateUserRoleServiceService } from 'src/app/service/update-user-role.service.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  users: any[] = [];
  newUserData: any = {}; // Declare newUserData property to store form data
  selectedUser: any = {}; // Object to hold selected user for update
  roleOptions: string[] = ['MANAGER', 'CONSULTANT', 'CHEF_PROJET'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers()
      .subscribe(
        (data) => {
          this.users = data;

        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  createUser(newUser: any): void {
    this.userService.createUser(newUser)
      .subscribe(
        (data) => {
          this.fetchUsers(); // Refresh the user list after creation
          this.newUserData = {};

        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
  }

  updateUser(userId: number, updatedData: any): void {
    this.userService.updateUser(userId, updatedData)
      .subscribe(
        (data) => {
          this.fetchUsers(); // Refresh the user list after update
          this.selectedUser = {}; // Clear the selected user data
          

        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId)
      .subscribe(
        (data) => {
          this.users = this.users.filter(user => user.id !== userId); // Remove deleted user from the list
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
  }



  openCreateUserModal(): void {
    // Implement logic to open a modal for creating a new user
    this.newUserData = {};
    console.log('Open create user modal');
    // Example: Trigger Bootstrap modal using jQuery or Angular Material dialog
  }

  openUpdateUserModal(user: any): void {
    // Implement logic to open a modal for updating a user
    this.selectedUser = { ...user };
    console.log('Open update user modal for user:', user);
    // Example: Trigger Bootstrap modal using jQuery or Angular Material dialog
  }
}
