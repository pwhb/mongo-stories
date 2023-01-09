export const formatResponse = (data: any) => {
	if (data[0]) {
		return {
			data,
			total: data.length
		};
	} else {
		return {
			data
		};
	}
};

export const enumToString = (val: string) => val.replace(/_/g, ' ').toLowerCase();

export const stringToEnum = (val: string) => val.replace(/\s/g, '_').toUpperCase();

export const parseEnum = (enumObj: Object) => Object.values(enumObj)
.filter((val) => typeof val === 'string')
.map((val) => {
    const id = val as string;
    const toString = enumToString(id);
    return {
        id,
        toString,
    };
});