export class User {
    name: string;
    lastname: string;
    roleId: number;
}

export class UserRole {
    id: number;
    name: string;
}

export class UserRoleFactory {
    getDefaultUserRoles() {
        return [{
            id: 1,
            name: 'Admin'
        },{
            id: 2,
            name: 'Project Manager'
        },{
            id: 3,
            name: 'Mindundi'
        }]
        
    }
}