

export const useUtilsStores=()=>{

    const formatError=(error:Record<string,any>): string =>{
        let errorMessages: string= '';
        for (const field in error) {
            if (error.hasOwnProperty(field)) {
                error[field].forEach((msg:string) => {
                errorMessages += `- ${msg}\n`;
                });
            }
        }
        return errorMessages
    }
    return {
        formatError
    }
}