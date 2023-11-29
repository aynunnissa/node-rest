import { ServerResponse } from "http";

interface ISuccess {
    data?: Object[] | Object | null
}

const successResponse = (res: ServerResponse, data?: ISuccess, statusCode ?: number, message ?: string) => {
    
    const response = {
        success: true,
        message: message,
        data: data?.data
    }
    res.statusCode = statusCode ?? 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(response));
    res.end();
}

const notFoundResponse = (res: ServerResponse, message: string) => {
    
    const response = {
        error: true,
        message: message
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(response));
    res.end();
}

const serverErrorResponse = (res: ServerResponse, message: string) => {
    
    const response = {
        error: true,
        message: message
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(response));
    res.end();
}

const badRequestResponse = (res: ServerResponse, message: string) => {
    
    const response = {
        error: true,
        message: message
    }
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(response));
    res.end();
}

export { successResponse, notFoundResponse, serverErrorResponse, badRequestResponse }