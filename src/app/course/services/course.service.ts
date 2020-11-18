import { Course } from './../model/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CourseService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses/courses');
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('/api/courses/courses', course);
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete('/api/courses/courses/' + courseId);
  }

  updateCourse(courseId: string | number, course: Course): Observable<any> {
    return this.http.put('/api/courses/courses/' + courseId, course);
  }
}