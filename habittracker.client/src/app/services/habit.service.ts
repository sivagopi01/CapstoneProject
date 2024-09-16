import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from '../models/Habit';
import { User } from '../models/User';
import { AuthFields } from '../constants/AuthFields';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  constructor(public http: HttpClient) { }
  url: string = 'https://localhost:7053/api/';
  public getAllHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>(this.url + 'Habit/GetAllHabits/' + parseInt(localStorage.getItem(AuthFields.UserId) ?? '0'));
  }
  public updateHabit(habit: Habit): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'Habit/UpdateHabit', habit);
  }
  public getHabitById(id: number): Observable<Habit> {
    return this.http.get<Habit>(this.url + 'Habit/GetHabitById/' + id);
  }
  public deleteHabit(id: number): Observable<Habit> {
    return this.http.get<Habit>(this.url + 'Habit/DeleteHabit/' + id);
  }
  public updateUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'User/UpdateUser', user);
  }
  public login(login: any): Observable<User> {
    return this.http.post<User>(this.url + 'User/Login',login);
  }
  public saveUserInLocal(user: User) {
    this.saveItemInLocal(AuthFields.UserId, user.id);
    this.saveItemInLocal(AuthFields.UserName, user.userName);
    this.saveItemInLocal(AuthFields.FirstName, user.firstName);
    this.saveItemInLocal(AuthFields.LastName, user.lastName);
    this.saveItemInLocal(AuthFields.Password, user.password);
    this.saveItemInLocal(AuthFields.FathersName, user.fathersName);
    this.saveItemInLocal(AuthFields.MobileNumber, user.mobileNumber);
    this.saveItemInLocal(AuthFields.Gender, user.gender);
  }
  public removeUserFromLocal() {
    localStorage.removeItem(AuthFields.UserId);
    localStorage.removeItem(AuthFields.UserName);
    localStorage.removeItem(AuthFields.FirstName);
    localStorage.removeItem(AuthFields.LastName);
    localStorage.removeItem(AuthFields.Password);
    localStorage.removeItem(AuthFields.FathersName);
    localStorage.removeItem(AuthFields.MobileNumber);
    localStorage.removeItem(AuthFields.Gender);
  }
  public saveItemInLocal(title: string, value: any) {
    localStorage.setItem(title, JSON.stringify(value));
  }
  public getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + 'User/GetUser/' + id);
  }
  public getLocalUser():User {
    var user = new User();
    user.id = parseInt(localStorage.getItem(AuthFields.UserId) ?? '0');
    user.firstName = localStorage.getItem(AuthFields.FirstName) ?? '';
    user.lastName = localStorage.getItem(AuthFields.LastName) ?? '';
    user.fathersName = localStorage.getItem(AuthFields.FathersName) ?? '';
    user.userName = localStorage.getItem(AuthFields.UserName) ?? '';
    user.gender = localStorage.getItem(AuthFields.Gender) ?? '';
    user.mobileNumber = parseInt(localStorage.getItem(AuthFields.MobileNumber) ?? '0');
    return user;
  }
}
