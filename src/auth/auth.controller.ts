import { Controller, Post, Body} from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';

/**
 * http://localhost:3333/api/auth/login
 * {
	"name": "nassim",
	"email": "nassim.benaissa@esprit.tn",
	"password":"password"
}
 */
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    
    
    @Post('register')
        register(@Body() user: NewUserDTO): Promise<UserDetails | null>{
            return this.authService.register(user);
        }

        /* 
        {
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkM2EyNWRiOTdkZjdjMTc5ZTIzODc4IiwibmFtZSI6Im5hc3NpbSIsImVtYWlsIjoibmFzc2ltLmJlbmFpc3NhQGVzcHJpdC50biJ9LCJpYXQiOjE2NzQ4MzMxODgsImV4cCI6MTY3NDgzNjc4OH0.cKfNmq1rOcGsEPyeEr86dTsRObdWIhvwPYGUUhgGNyI"
}
        **/
    @Post('login')
    @HttpCode(HttpStatus.OK)
        login(@Body() user: ExistingUserDTO): Promise<{token: string} | null>{
            return this.authService.login(user);
        }
    
}
