export class PaginationDto {
  // @IsOptional()
  // @IsInt({ message: 'page must be an integer number' })
  // @Min(1, { message: 'page must not be less than 1' })
  page?: number = 1;

  // @IsOptional()
  // @IsInt({ message: 'pageSize must be an integer number' })
  // @Min(1, { message: 'pageSize must not be less than 1' })
  pageSize?: number = 10;
}
