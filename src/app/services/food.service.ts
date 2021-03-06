import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Food } from '../models/food';
import { Meal } from '../models/meal';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseUrl: string = environment.url + ':' + environment.port + '/FitBuddy';

  constructor(private http: HttpClient) { }

  getAllMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.baseUrl + '/meal');
  }

  getAllFoodByUserId(id: number): Observable<Food[]> {
    return this.http.get<Food[]>(this.baseUrl + '/log/' + id)
  }

  getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.baseUrl + '/log');
  }

  addFood(f: Food): Observable<Food[]> {
    return this.http.post<Food[]>(this.baseUrl + '/log', f);
  }

  addMeal(m: Meal): Observable<Meal[]> {
    return this.http.post<Meal[]>(this.baseUrl + '/meal', m);
  }

  removeAllFoods(u: User): Observable<User[]> {
    console.log(u);
    return this.http.post<User[]>(this.baseUrl + '/log/remove', u);
  }
}