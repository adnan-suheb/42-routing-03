import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { UsersDashComponent } from "./users/users-dash/users-dash.component";
import { UsersFormComponent } from "./users/users-form/users-form.component";
import { ProductsDashComponent } from "./products/products-dash/products-dash.component";
import { SingleUserComponent } from "./users/single-user/single-user.component";
import { SingleProductComponent } from "./products/single-product/single-product.component";
import { ProductsFormComponent } from "./products/products-form/products-form.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { FairsDashComponent } from "./fairs/fairs-dash/fairs-dash.component";
import { AuthFormComponent } from "./shared/component/auth-form/auth-form.component";
import { AuthGuardGuard } from "./shared/service/auth-guard.guard";
import { UserRoleGuard } from "./shared/service/user-role.guard";
import { FairsDetailsComponent } from "./fairs/fairs-details/fairs-details.component";

const routes: Routes = [

    {
        path: '',
        component: AuthFormComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardGuard, UserRoleGuard],
        data: {
            userRole: ['admin', 'buyer', 'superAdmin']
        }
    },
    {
        path: 'users',
        component: UsersDashComponent,
        canActivate: [AuthGuardGuard, UserRoleGuard],
        children: [
            {
                path: 'addUser',
                component: UsersFormComponent
            },
            {
                path: ':userId',
                component: SingleUserComponent
            },
            {
                path: ':userId/editUser',
                component: UsersFormComponent
            },
        ],
        data: {
            userRole: ['admin', 'superAdmin']
        }
    },
    {
        path: 'products',
        component: ProductsDashComponent,
        canActivate: [AuthGuardGuard, UserRoleGuard],
        children: [
            {
                path: 'addProduct',
                component: ProductsFormComponent
            },
            {
                path: ':productId',
                component: SingleProductComponent
            },
            {
                path: ':productId/editProduct',
                component: ProductsFormComponent
            },
        ],
        data: {
            userRole: ['admin', 'buyer', 'superAdmin']
        }
    },
    {
        path: 'fairs',
        component: FairsDashComponent,
        canActivate: [AuthGuardGuard, UserRoleGuard],
        children: [
            {
                path: ':fairsId',
                component: FairsDetailsComponent
            }
        ],
        data: {
            userRole: ['superAdmin']
        }
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent,
        data: {
            msg: 'Page not found >> from static data through routing'
        }
    },
    {
        path: '**',
        redirectTo: 'page-not-found'
    },

]

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRouting {

}