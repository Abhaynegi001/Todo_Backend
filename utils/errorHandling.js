class ApiError extends Error {
    constructor(
      statusCode,
      message = "something went Wrong",
      errors = [],
      stack = ""
    ) {
      super(message);
      this.statusCode = statusCode;
      this.data = null;
      this.message = message;
      this.sucess = false;
      this.errors = errors;class ApiError extends Error {
        constructor(
          statusCode,
          message = "something went Wrong",
          errors = [],
          stack = ""
        ) {
          super(message);
          this.statusCode = statusCode;
          this.data = null;
          this.message = message;
          this.sucess = false;
          this.errors = errors;
      
          if(stack){
              this.stack = stack
          }else{
              Error.captureStackTrace(this , this.constructor)
          }
        }
      }
      
      
  
      if(stack){
          this.stack = stack
      }else{
          Error.captureStackTrace(this , this.constructor)
      }
    }
  }
  
  export default ApiError 
  
