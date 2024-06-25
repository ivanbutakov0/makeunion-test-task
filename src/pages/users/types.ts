export type TUser = {
	id: number
	name: string
	username: string
	email: string
	phone: string
	website: string
	address: TAddress
	company: TCompany
}

type TAddress = {
	city: string
	street: string
	suite: string
	zipcode: string
	geo: TGeo
}

type TGeo = {
	lat: string
	lng: string
}

type TCompany = {
	bs: string
	catchPhrase: string
	name: string
}
