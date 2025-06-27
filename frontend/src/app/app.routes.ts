import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { path: 'auth', 
        canActivate:[publicGuard],  
        loadChildren: () => import('./auth/features/shell/auth.routes')
    },
    {  path: 'home',
        canActivate:[privateGuard],
        loadComponent: () => import('./pages/home/home').then(m => m.Home)},
    { path: 'manage-users', loadComponent: () => import('./pages/manage-users/manage-users').then(m => m.ManageUsers)},
    
    { path: 'beneficiaries',
        loadComponent: () => import('./pages/beneficiaries/beneficiaries').then(m => m.Beneficiaries)
    },

    { path: 'donate',
        loadComponent: () => import('./pages/donate/donate').then(m => m.Donate)
    },

    { path: 'donor',
        loadComponent: () => import('./pages/donor/donor').then(m => m.Donor)
    },

    { path: 'inventory',
        loadComponent: () => import('./pages/inventory/inventory').then(m => m.Inventory)
    },

    { path: 'inventoryproduct',
        loadComponent: () => import('./pages/inventoryproduct/inventoryproduct').then(m => m.Inventoryproduct)
    },

     { path: 'inventory-sale-product',
        loadComponent: () => import('./pages/inventory-sale-product/inventory-sale-product').then(m => m.InventorySaleProduct)
    },

    { path: 'bodega',
        loadComponent: () => import('./pages/bodega/bodega').then(m => m.Bodega)
    },

    { path: 'ventas',
        loadComponent: () => import('./pages/ventas/ventas').then(m => m.Ventas)
    },

    { path: 'caja',
        loadComponent: () => import('./pages/caja/caja').then(m => m.Caja)
    },


    { path: '**', redirectTo: 'home'}
];
