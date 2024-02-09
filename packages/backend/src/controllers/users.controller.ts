import type { Request, Response } from 'express';

class UsersController {
  public async get(req: Request, res: Response) {
    return res.status(200).json({
      message: 'This will return all users.',
    });
  }
  public async post(req: Request, res: Response) {
    return res.status(200).json({
      message: 'This will create a new user.',
    });
  }
  public async put(req: Request, res: Response) {
    return res.status(200).json({
      message: 'This will update an user.',
    });
  }
  public async delete(req: Request, res: Response) {
    return res.status(200).json({
      message: 'This will delete an user.',
    });
  }
}

export { UsersController };
