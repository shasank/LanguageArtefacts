declare const now: now;
interface now {
	getClientData(key: string) : string
	getFullName() : string
	hasRole(role: string) : boolean
	hasRoleExactly(role: string) : boolean
	hasRoleFromList(roles: string) : boolean
    hasRoles() : boolean
}
