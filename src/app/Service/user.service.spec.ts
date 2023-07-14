import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UserService]
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should send signup request with correct data', () => {
    const testData = { username: 'testuser', password: 'password' };

    userService.signup(testData).subscribe();

    const req = httpTestingController.expectOne('http://localhost:8082/user/signup');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(testData);

    req.flush({});

  });

});

  