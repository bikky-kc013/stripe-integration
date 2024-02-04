import { Request, Response, NextFunction } from 'express';

 const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: 'This route is not defined',
  });
};

 const errorHandler = async (
  err: { statusCode?: number; status?: string; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
  });
};

export { notFound, errorHandler };
