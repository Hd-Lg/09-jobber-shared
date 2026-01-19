import {UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary} from 'cloudinary'

export function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto'
    }, (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  });
}

export function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      chunk_size: 50000,
      resource_type: 'video'
    }, (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  });
}
