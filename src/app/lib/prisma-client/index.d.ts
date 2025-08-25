
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Syllabus
 * 
 */
export type Syllabus = $Result.DefaultSelection<Prisma.$SyllabusPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Topic
 * 
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model Resource
 * 
 */
export type Resource = $Result.DefaultSelection<Prisma.$ResourcePayload>
/**
 * Model TopicResource
 * 
 */
export type TopicResource = $Result.DefaultSelection<Prisma.$TopicResourcePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model ClassStudent
 * 
 */
export type ClassStudent = $Result.DefaultSelection<Prisma.$ClassStudentPayload>
/**
 * Model ClassTeacher
 * 
 */
export type ClassTeacher = $Result.DefaultSelection<Prisma.$ClassTeacherPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model ClassType
 * 
 */
export type ClassType = $Result.DefaultSelection<Prisma.$ClassTypePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  Male: 'Male',
  Female: 'Female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  Student: 'Student',
  Teacher: 'Teacher',
  Admin: 'Admin',
  Company: 'Company'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AttendanceStatus: {
  Present: 'Present',
  Not_present: 'Not_present',
  Unknown: 'Unknown'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classes
 * const classes = await prisma.class.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classes
   * const classes = await prisma.class.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syllabus`: Exposes CRUD operations for the **Syllabus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Syllabi
    * const syllabi = await prisma.syllabus.findMany()
    * ```
    */
  get syllabus(): Prisma.SyllabusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **Resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.ResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicResource`: Exposes CRUD operations for the **TopicResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicResources
    * const topicResources = await prisma.topicResource.findMany()
    * ```
    */
  get topicResource(): Prisma.TopicResourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classStudent`: Exposes CRUD operations for the **ClassStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassStudents
    * const classStudents = await prisma.classStudent.findMany()
    * ```
    */
  get classStudent(): Prisma.ClassStudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classTeacher`: Exposes CRUD operations for the **ClassTeacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassTeachers
    * const classTeachers = await prisma.classTeacher.findMany()
    * ```
    */
  get classTeacher(): Prisma.ClassTeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classType`: Exposes CRUD operations for the **ClassType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassTypes
    * const classTypes = await prisma.classType.findMany()
    * ```
    */
  get classType(): Prisma.ClassTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Class: 'Class',
    User: 'User',
    Syllabus: 'Syllabus',
    Module: 'Module',
    Topic: 'Topic',
    Resource: 'Resource',
    TopicResource: 'TopicResource',
    Session: 'Session',
    ClassStudent: 'ClassStudent',
    ClassTeacher: 'ClassTeacher',
    Company: 'Company',
    ClassType: 'ClassType',
    Attendance: 'Attendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "class" | "user" | "syllabus" | "module" | "topic" | "resource" | "topicResource" | "session" | "classStudent" | "classTeacher" | "company" | "classType" | "attendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Syllabus: {
        payload: Prisma.$SyllabusPayload<ExtArgs>
        fields: Prisma.SyllabusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyllabusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyllabusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          findFirst: {
            args: Prisma.SyllabusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyllabusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          findMany: {
            args: Prisma.SyllabusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>[]
          }
          create: {
            args: Prisma.SyllabusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          createMany: {
            args: Prisma.SyllabusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyllabusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>[]
          }
          delete: {
            args: Prisma.SyllabusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          update: {
            args: Prisma.SyllabusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          deleteMany: {
            args: Prisma.SyllabusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyllabusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyllabusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>[]
          }
          upsert: {
            args: Prisma.SyllabusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyllabusPayload>
          }
          aggregate: {
            args: Prisma.SyllabusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyllabus>
          }
          groupBy: {
            args: Prisma.SyllabusGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyllabusGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyllabusCountArgs<ExtArgs>
            result: $Utils.Optional<SyllabusCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      Resource: {
        payload: Prisma.$ResourcePayload<ExtArgs>
        fields: Prisma.ResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findFirst: {
            args: Prisma.ResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          findMany: {
            args: Prisma.ResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          create: {
            args: Prisma.ResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          createMany: {
            args: Prisma.ResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          delete: {
            args: Prisma.ResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          update: {
            args: Prisma.ResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          deleteMany: {
            args: Prisma.ResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>[]
          }
          upsert: {
            args: Prisma.ResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.ResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      TopicResource: {
        payload: Prisma.$TopicResourcePayload<ExtArgs>
        fields: Prisma.TopicResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          findFirst: {
            args: Prisma.TopicResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          findMany: {
            args: Prisma.TopicResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>[]
          }
          create: {
            args: Prisma.TopicResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          createMany: {
            args: Prisma.TopicResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>[]
          }
          delete: {
            args: Prisma.TopicResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          update: {
            args: Prisma.TopicResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          deleteMany: {
            args: Prisma.TopicResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>[]
          }
          upsert: {
            args: Prisma.TopicResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicResourcePayload>
          }
          aggregate: {
            args: Prisma.TopicResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicResource>
          }
          groupBy: {
            args: Prisma.TopicResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicResourceCountArgs<ExtArgs>
            result: $Utils.Optional<TopicResourceCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      ClassStudent: {
        payload: Prisma.$ClassStudentPayload<ExtArgs>
        fields: Prisma.ClassStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          findFirst: {
            args: Prisma.ClassStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          findMany: {
            args: Prisma.ClassStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          create: {
            args: Prisma.ClassStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          createMany: {
            args: Prisma.ClassStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassStudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          delete: {
            args: Prisma.ClassStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          update: {
            args: Prisma.ClassStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          deleteMany: {
            args: Prisma.ClassStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassStudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>[]
          }
          upsert: {
            args: Prisma.ClassStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassStudentPayload>
          }
          aggregate: {
            args: Prisma.ClassStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassStudent>
          }
          groupBy: {
            args: Prisma.ClassStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassStudentCountArgs<ExtArgs>
            result: $Utils.Optional<ClassStudentCountAggregateOutputType> | number
          }
        }
      }
      ClassTeacher: {
        payload: Prisma.$ClassTeacherPayload<ExtArgs>
        fields: Prisma.ClassTeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassTeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassTeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          findFirst: {
            args: Prisma.ClassTeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassTeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          findMany: {
            args: Prisma.ClassTeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[]
          }
          create: {
            args: Prisma.ClassTeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          createMany: {
            args: Prisma.ClassTeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassTeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[]
          }
          delete: {
            args: Prisma.ClassTeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          update: {
            args: Prisma.ClassTeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          deleteMany: {
            args: Prisma.ClassTeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassTeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassTeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>[]
          }
          upsert: {
            args: Prisma.ClassTeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTeacherPayload>
          }
          aggregate: {
            args: Prisma.ClassTeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassTeacher>
          }
          groupBy: {
            args: Prisma.ClassTeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassTeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassTeacherCountArgs<ExtArgs>
            result: $Utils.Optional<ClassTeacherCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      ClassType: {
        payload: Prisma.$ClassTypePayload<ExtArgs>
        fields: Prisma.ClassTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          findFirst: {
            args: Prisma.ClassTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          findMany: {
            args: Prisma.ClassTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>[]
          }
          create: {
            args: Prisma.ClassTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          createMany: {
            args: Prisma.ClassTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>[]
          }
          delete: {
            args: Prisma.ClassTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          update: {
            args: Prisma.ClassTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          deleteMany: {
            args: Prisma.ClassTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>[]
          }
          upsert: {
            args: Prisma.ClassTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassTypePayload>
          }
          aggregate: {
            args: Prisma.ClassTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassType>
          }
          groupBy: {
            args: Prisma.ClassTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ClassTypeCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    class?: ClassOmit
    user?: UserOmit
    syllabus?: SyllabusOmit
    module?: ModuleOmit
    topic?: TopicOmit
    resource?: ResourceOmit
    topicResource?: TopicResourceOmit
    session?: SessionOmit
    classStudent?: ClassStudentOmit
    classTeacher?: ClassTeacherOmit
    company?: CompanyOmit
    classType?: ClassTypeOmit
    attendance?: AttendanceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
    teachers: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
    teachers?: boolean | ClassCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassTeacherWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    classStudents: number
    classTeachers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classStudents?: boolean | UserCountOutputTypeCountClassStudentsArgs
    classTeachers?: boolean | UserCountOutputTypeCountClassTeachersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassTeacherWhereInput
  }


  /**
   * Count Type SyllabusCountOutputType
   */

  export type SyllabusCountOutputType = {
    modules: number
  }

  export type SyllabusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | SyllabusCountOutputTypeCountModulesArgs
  }

  // Custom InputTypes
  /**
   * SyllabusCountOutputType without action
   */
  export type SyllabusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyllabusCountOutputType
     */
    select?: SyllabusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SyllabusCountOutputType without action
   */
  export type SyllabusCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    topics: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | ModuleCountOutputTypeCountTopicsArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    resources: number
    sessions: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resources?: boolean | TopicCountOutputTypeCountResourcesArgs
    sessions?: boolean | TopicCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicResourceWhereInput
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    topicResources: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicResources?: boolean | ResourceCountOutputTypeCountTopicResourcesArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountTopicResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicResourceWhereInput
  }


  /**
   * Count Type ClassStudentCountOutputType
   */

  export type ClassStudentCountOutputType = {
    attendance: number
  }

  export type ClassStudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | ClassStudentCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * ClassStudentCountOutputType without action
   */
  export type ClassStudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudentCountOutputType
     */
    select?: ClassStudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassStudentCountOutputType without action
   */
  export type ClassStudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    classes: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    classes?: boolean | CompanyCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type ClassTypeCountOutputType
   */

  export type ClassTypeCountOutputType = {
    classes: number
  }

  export type ClassTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassTypeCountOutputTypeCountClassesArgs
  }

  // Custom InputTypes
  /**
   * ClassTypeCountOutputType without action
   */
  export type ClassTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTypeCountOutputType
     */
    select?: ClassTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassTypeCountOutputType without action
   */
  export type ClassTypeCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    syllabus_id: string | null
    company_id: string | null
    type_id: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    syllabus_id: string | null
    company_id: string | null
    type_id: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    syllabus_id: number
    company_id: number
    type_id: number
    name: number
    description: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    syllabus_id?: true
    company_id?: true
    type_id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    syllabus_id?: true
    company_id?: true
    type_id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    syllabus_id?: true
    company_id?: true
    type_id?: true
    name?: true
    description?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    syllabus_id: string
    company_id: string
    type_id: string
    name: string
    description: string | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    company_id?: boolean
    type_id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    teachers?: boolean | Class$teachersArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    company_id?: boolean
    type_id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    company_id?: boolean
    type_id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    syllabus_id?: boolean
    company_id?: boolean
    type_id?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "syllabus_id" | "company_id" | "type_id" | "name" | "description" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    teachers?: boolean | Class$teachersArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    type?: boolean | ClassTypeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      syllabus: Prisma.$SyllabusPayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
      type: Prisma.$ClassTypePayload<ExtArgs>
      students: Prisma.$ClassStudentPayload<ExtArgs>[]
      teachers: Prisma.$ClassTeacherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      syllabus_id: string
      company_id: string
      type_id: string
      name: string
      description: string | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    syllabus<T extends SyllabusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyllabusDefaultArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends ClassTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassTypeDefaultArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Class$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Class$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly syllabus_id: FieldRef<"Class", 'String'>
    readonly company_id: FieldRef<"Class", 'String'>
    readonly type_id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly description: FieldRef<"Class", 'String'>
    readonly is_active: FieldRef<"Class", 'Boolean'>
    readonly created_at: FieldRef<"Class", 'DateTime'>
    readonly updated_at: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    cursor?: ClassStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * Class.teachers
   */
  export type Class$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    where?: ClassTeacherWhereInput
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    cursor?: ClassTeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassTeacherScalarFieldEnum | ClassTeacherScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    company_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    photo: string | null
    gender: $Enums.Gender | null
    address: string | null
    role: $Enums.Role | null
    is_email_verified: boolean | null
    is_phone_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    company_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    photo: string | null
    gender: $Enums.Gender | null
    address: string | null
    role: $Enums.Role | null
    is_email_verified: boolean | null
    is_phone_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    company_id: number
    first_name: number
    last_name: number
    email: number
    photo: number
    gender: number
    address: number
    role: number
    is_email_verified: number
    is_phone_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    company_id?: true
    first_name?: true
    last_name?: true
    email?: true
    photo?: true
    gender?: true
    address?: true
    role?: true
    is_email_verified?: true
    is_phone_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    company_id?: true
    first_name?: true
    last_name?: true
    email?: true
    photo?: true
    gender?: true
    address?: true
    role?: true
    is_email_verified?: true
    is_phone_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    company_id?: true
    first_name?: true
    last_name?: true
    email?: true
    photo?: true
    gender?: true
    address?: true
    role?: true
    is_email_verified?: true
    is_phone_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    company_id: string | null
    first_name: string
    last_name: string
    email: string
    photo: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified: boolean
    is_phone_verified: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    photo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
    classStudents?: boolean | User$classStudentsArgs<ExtArgs>
    classTeachers?: boolean | User$classTeachersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    photo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    photo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    company?: boolean | User$companyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    company_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    photo?: boolean
    gender?: boolean
    address?: boolean
    role?: boolean
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_id" | "first_name" | "last_name" | "email" | "photo" | "gender" | "address" | "role" | "is_email_verified" | "is_phone_verified" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
    classStudents?: boolean | User$classStudentsArgs<ExtArgs>
    classTeachers?: boolean | User$classTeachersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | User$companyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs> | null
      classStudents: Prisma.$ClassStudentPayload<ExtArgs>[]
      classTeachers: Prisma.$ClassTeacherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_id: string | null
      first_name: string
      last_name: string
      email: string
      photo: string | null
      gender: $Enums.Gender
      address: string
      role: $Enums.Role
      is_email_verified: boolean
      is_phone_verified: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    classStudents<T extends User$classStudentsArgs<ExtArgs> = {}>(args?: Subset<T, User$classStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classTeachers<T extends User$classTeachersArgs<ExtArgs> = {}>(args?: Subset<T, User$classTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly company_id: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly address: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_email_verified: FieldRef<"User", 'Boolean'>
    readonly is_phone_verified: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.classStudents
   */
  export type User$classStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    cursor?: ClassStudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * User.classTeachers
   */
  export type User$classTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    where?: ClassTeacherWhereInput
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    cursor?: ClassTeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassTeacherScalarFieldEnum | ClassTeacherScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Syllabus
   */

  export type AggregateSyllabus = {
    _count: SyllabusCountAggregateOutputType | null
    _min: SyllabusMinAggregateOutputType | null
    _max: SyllabusMaxAggregateOutputType | null
  }

  export type SyllabusMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SyllabusMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SyllabusCountAggregateOutputType = {
    id: number
    title: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SyllabusMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SyllabusMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type SyllabusCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SyllabusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllabus to aggregate.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Syllabi
    **/
    _count?: true | SyllabusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyllabusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyllabusMaxAggregateInputType
  }

  export type GetSyllabusAggregateType<T extends SyllabusAggregateArgs> = {
        [P in keyof T & keyof AggregateSyllabus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyllabus[P]>
      : GetScalarType<T[P], AggregateSyllabus[P]>
  }




  export type SyllabusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyllabusWhereInput
    orderBy?: SyllabusOrderByWithAggregationInput | SyllabusOrderByWithAggregationInput[]
    by: SyllabusScalarFieldEnum[] | SyllabusScalarFieldEnum
    having?: SyllabusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyllabusCountAggregateInputType | true
    _min?: SyllabusMinAggregateInputType
    _max?: SyllabusMaxAggregateInputType
  }

  export type SyllabusGroupByOutputType = {
    id: string
    title: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: SyllabusCountAggregateOutputType | null
    _min: SyllabusMinAggregateOutputType | null
    _max: SyllabusMaxAggregateOutputType | null
  }

  type GetSyllabusGroupByPayload<T extends SyllabusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyllabusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyllabusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyllabusGroupByOutputType[P]>
            : GetScalarType<T[P], SyllabusGroupByOutputType[P]>
        }
      >
    >


  export type SyllabusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    class?: boolean | Syllabus$classArgs<ExtArgs>
    modules?: boolean | Syllabus$modulesArgs<ExtArgs>
    _count?: boolean | SyllabusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syllabus"]>

  export type SyllabusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["syllabus"]>

  export type SyllabusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["syllabus"]>

  export type SyllabusSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SyllabusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "created_at" | "updated_at", ExtArgs["result"]["syllabus"]>
  export type SyllabusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Syllabus$classArgs<ExtArgs>
    modules?: boolean | Syllabus$modulesArgs<ExtArgs>
    _count?: boolean | SyllabusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SyllabusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SyllabusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SyllabusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Syllabus"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs> | null
      modules: Prisma.$ModulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["syllabus"]>
    composites: {}
  }

  type SyllabusGetPayload<S extends boolean | null | undefined | SyllabusDefaultArgs> = $Result.GetResult<Prisma.$SyllabusPayload, S>

  type SyllabusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyllabusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyllabusCountAggregateInputType | true
    }

  export interface SyllabusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Syllabus'], meta: { name: 'Syllabus' } }
    /**
     * Find zero or one Syllabus that matches the filter.
     * @param {SyllabusFindUniqueArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyllabusFindUniqueArgs>(args: SelectSubset<T, SyllabusFindUniqueArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Syllabus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyllabusFindUniqueOrThrowArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyllabusFindUniqueOrThrowArgs>(args: SelectSubset<T, SyllabusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllabus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindFirstArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyllabusFindFirstArgs>(args?: SelectSubset<T, SyllabusFindFirstArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Syllabus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindFirstOrThrowArgs} args - Arguments to find a Syllabus
     * @example
     * // Get one Syllabus
     * const syllabus = await prisma.syllabus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyllabusFindFirstOrThrowArgs>(args?: SelectSubset<T, SyllabusFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Syllabi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Syllabi
     * const syllabi = await prisma.syllabus.findMany()
     * 
     * // Get first 10 Syllabi
     * const syllabi = await prisma.syllabus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syllabusWithIdOnly = await prisma.syllabus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyllabusFindManyArgs>(args?: SelectSubset<T, SyllabusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Syllabus.
     * @param {SyllabusCreateArgs} args - Arguments to create a Syllabus.
     * @example
     * // Create one Syllabus
     * const Syllabus = await prisma.syllabus.create({
     *   data: {
     *     // ... data to create a Syllabus
     *   }
     * })
     * 
     */
    create<T extends SyllabusCreateArgs>(args: SelectSubset<T, SyllabusCreateArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Syllabi.
     * @param {SyllabusCreateManyArgs} args - Arguments to create many Syllabi.
     * @example
     * // Create many Syllabi
     * const syllabus = await prisma.syllabus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyllabusCreateManyArgs>(args?: SelectSubset<T, SyllabusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Syllabi and returns the data saved in the database.
     * @param {SyllabusCreateManyAndReturnArgs} args - Arguments to create many Syllabi.
     * @example
     * // Create many Syllabi
     * const syllabus = await prisma.syllabus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Syllabi and only return the `id`
     * const syllabusWithIdOnly = await prisma.syllabus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyllabusCreateManyAndReturnArgs>(args?: SelectSubset<T, SyllabusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Syllabus.
     * @param {SyllabusDeleteArgs} args - Arguments to delete one Syllabus.
     * @example
     * // Delete one Syllabus
     * const Syllabus = await prisma.syllabus.delete({
     *   where: {
     *     // ... filter to delete one Syllabus
     *   }
     * })
     * 
     */
    delete<T extends SyllabusDeleteArgs>(args: SelectSubset<T, SyllabusDeleteArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Syllabus.
     * @param {SyllabusUpdateArgs} args - Arguments to update one Syllabus.
     * @example
     * // Update one Syllabus
     * const syllabus = await prisma.syllabus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyllabusUpdateArgs>(args: SelectSubset<T, SyllabusUpdateArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Syllabi.
     * @param {SyllabusDeleteManyArgs} args - Arguments to filter Syllabi to delete.
     * @example
     * // Delete a few Syllabi
     * const { count } = await prisma.syllabus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyllabusDeleteManyArgs>(args?: SelectSubset<T, SyllabusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syllabi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Syllabi
     * const syllabus = await prisma.syllabus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyllabusUpdateManyArgs>(args: SelectSubset<T, SyllabusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Syllabi and returns the data updated in the database.
     * @param {SyllabusUpdateManyAndReturnArgs} args - Arguments to update many Syllabi.
     * @example
     * // Update many Syllabi
     * const syllabus = await prisma.syllabus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Syllabi and only return the `id`
     * const syllabusWithIdOnly = await prisma.syllabus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyllabusUpdateManyAndReturnArgs>(args: SelectSubset<T, SyllabusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Syllabus.
     * @param {SyllabusUpsertArgs} args - Arguments to update or create a Syllabus.
     * @example
     * // Update or create a Syllabus
     * const syllabus = await prisma.syllabus.upsert({
     *   create: {
     *     // ... data to create a Syllabus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Syllabus we want to update
     *   }
     * })
     */
    upsert<T extends SyllabusUpsertArgs>(args: SelectSubset<T, SyllabusUpsertArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Syllabi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusCountArgs} args - Arguments to filter Syllabi to count.
     * @example
     * // Count the number of Syllabi
     * const count = await prisma.syllabus.count({
     *   where: {
     *     // ... the filter for the Syllabi we want to count
     *   }
     * })
    **/
    count<T extends SyllabusCountArgs>(
      args?: Subset<T, SyllabusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyllabusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Syllabus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyllabusAggregateArgs>(args: Subset<T, SyllabusAggregateArgs>): Prisma.PrismaPromise<GetSyllabusAggregateType<T>>

    /**
     * Group by Syllabus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyllabusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyllabusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyllabusGroupByArgs['orderBy'] }
        : { orderBy?: SyllabusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyllabusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyllabusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Syllabus model
   */
  readonly fields: SyllabusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Syllabus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyllabusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends Syllabus$classArgs<ExtArgs> = {}>(args?: Subset<T, Syllabus$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    modules<T extends Syllabus$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Syllabus$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Syllabus model
   */
  interface SyllabusFieldRefs {
    readonly id: FieldRef<"Syllabus", 'String'>
    readonly title: FieldRef<"Syllabus", 'String'>
    readonly description: FieldRef<"Syllabus", 'String'>
    readonly created_at: FieldRef<"Syllabus", 'DateTime'>
    readonly updated_at: FieldRef<"Syllabus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Syllabus findUnique
   */
  export type SyllabusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus findUniqueOrThrow
   */
  export type SyllabusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus findFirst
   */
  export type SyllabusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllabi.
     */
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus findFirstOrThrow
   */
  export type SyllabusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabus to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Syllabi.
     */
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus findMany
   */
  export type SyllabusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter, which Syllabi to fetch.
     */
    where?: SyllabusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Syllabi to fetch.
     */
    orderBy?: SyllabusOrderByWithRelationInput | SyllabusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Syllabi.
     */
    cursor?: SyllabusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Syllabi from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Syllabi.
     */
    skip?: number
    distinct?: SyllabusScalarFieldEnum | SyllabusScalarFieldEnum[]
  }

  /**
   * Syllabus create
   */
  export type SyllabusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The data needed to create a Syllabus.
     */
    data: XOR<SyllabusCreateInput, SyllabusUncheckedCreateInput>
  }

  /**
   * Syllabus createMany
   */
  export type SyllabusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Syllabi.
     */
    data: SyllabusCreateManyInput | SyllabusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Syllabus createManyAndReturn
   */
  export type SyllabusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * The data used to create many Syllabi.
     */
    data: SyllabusCreateManyInput | SyllabusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Syllabus update
   */
  export type SyllabusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The data needed to update a Syllabus.
     */
    data: XOR<SyllabusUpdateInput, SyllabusUncheckedUpdateInput>
    /**
     * Choose, which Syllabus to update.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus updateMany
   */
  export type SyllabusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Syllabi.
     */
    data: XOR<SyllabusUpdateManyMutationInput, SyllabusUncheckedUpdateManyInput>
    /**
     * Filter which Syllabi to update
     */
    where?: SyllabusWhereInput
    /**
     * Limit how many Syllabi to update.
     */
    limit?: number
  }

  /**
   * Syllabus updateManyAndReturn
   */
  export type SyllabusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * The data used to update Syllabi.
     */
    data: XOR<SyllabusUpdateManyMutationInput, SyllabusUncheckedUpdateManyInput>
    /**
     * Filter which Syllabi to update
     */
    where?: SyllabusWhereInput
    /**
     * Limit how many Syllabi to update.
     */
    limit?: number
  }

  /**
   * Syllabus upsert
   */
  export type SyllabusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * The filter to search for the Syllabus to update in case it exists.
     */
    where: SyllabusWhereUniqueInput
    /**
     * In case the Syllabus found by the `where` argument doesn't exist, create a new Syllabus with this data.
     */
    create: XOR<SyllabusCreateInput, SyllabusUncheckedCreateInput>
    /**
     * In case the Syllabus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyllabusUpdateInput, SyllabusUncheckedUpdateInput>
  }

  /**
   * Syllabus delete
   */
  export type SyllabusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
    /**
     * Filter which Syllabus to delete.
     */
    where: SyllabusWhereUniqueInput
  }

  /**
   * Syllabus deleteMany
   */
  export type SyllabusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Syllabi to delete
     */
    where?: SyllabusWhereInput
    /**
     * Limit how many Syllabi to delete.
     */
    limit?: number
  }

  /**
   * Syllabus.class
   */
  export type Syllabus$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Syllabus.modules
   */
  export type Syllabus$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Syllabus without action
   */
  export type SyllabusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Syllabus
     */
    select?: SyllabusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Syllabus
     */
    omit?: SyllabusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyllabusInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    position: number | null
  }

  export type ModuleSumAggregateOutputType = {
    position: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    syllabus_id: string | null
    position: number | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    syllabus_id: string | null
    position: number | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    syllabus_id: number
    position: number
    title: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    position?: true
  }

  export type ModuleSumAggregateInputType = {
    position?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    syllabus_id?: true
    position?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    syllabus_id?: true
    position?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    syllabus_id?: true
    position?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    syllabus_id: string
    position: number
    title: string
    description: string | null
    created_at: Date
    updated_at: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    topics?: boolean | Module$topicsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    syllabus_id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    syllabus_id?: boolean
    position?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "syllabus_id" | "position" | "title" | "description" | "created_at" | "updated_at", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
    topics?: boolean | Module$topicsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syllabus?: boolean | SyllabusDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      syllabus: Prisma.$SyllabusPayload<ExtArgs>
      topics: Prisma.$TopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      syllabus_id: string
      position: number
      title: string
      description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    syllabus<T extends SyllabusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SyllabusDefaultArgs<ExtArgs>>): Prisma__SyllabusClient<$Result.GetResult<Prisma.$SyllabusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topics<T extends Module$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Module$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly syllabus_id: FieldRef<"Module", 'String'>
    readonly position: FieldRef<"Module", 'Float'>
    readonly title: FieldRef<"Module", 'String'>
    readonly description: FieldRef<"Module", 'String'>
    readonly created_at: FieldRef<"Module", 'DateTime'>
    readonly updated_at: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.topics
   */
  export type Module$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    cursor?: TopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    position: number | null
  }

  export type TopicSumAggregateOutputType = {
    position: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: string | null
    module_id: string | null
    position: number | null
    title: string | null
    content: string | null
    goal: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TopicMaxAggregateOutputType = {
    id: string | null
    module_id: string | null
    position: number | null
    title: string | null
    content: string | null
    goal: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    module_id: number
    position: number
    title: number
    content: number
    goal: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    position?: true
  }

  export type TopicSumAggregateInputType = {
    position?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    module_id?: true
    position?: true
    title?: true
    content?: true
    goal?: true
    created_at?: true
    updated_at?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    module_id?: true
    position?: true
    title?: true
    content?: true
    goal?: true
    created_at?: true
    updated_at?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    module_id?: true
    position?: true
    title?: true
    content?: true
    goal?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: string
    module_id: string
    position: number
    title: string
    content: string | null
    goal: string | null
    created_at: Date
    updated_at: Date
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    position?: boolean
    title?: boolean
    content?: boolean
    goal?: boolean
    created_at?: boolean
    updated_at?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    resources?: boolean | Topic$resourcesArgs<ExtArgs>
    sessions?: boolean | Topic$sessionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    position?: boolean
    title?: boolean
    content?: boolean
    goal?: boolean
    created_at?: boolean
    updated_at?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module_id?: boolean
    position?: boolean
    title?: boolean
    content?: boolean
    goal?: boolean
    created_at?: boolean
    updated_at?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    module_id?: boolean
    position?: boolean
    title?: boolean
    content?: boolean
    goal?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module_id" | "position" | "title" | "content" | "goal" | "created_at" | "updated_at", ExtArgs["result"]["topic"]>
  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    resources?: boolean | Topic$resourcesArgs<ExtArgs>
    sessions?: boolean | Topic$sessionsArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type TopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      resources: Prisma.$TopicResourcePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      module_id: string
      position: number
      title: string
      content: string | null
      goal: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics and returns the data updated in the database.
     * @param {TopicUpdateManyAndReturnArgs} args - Arguments to update many Topics.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resources<T extends Topic$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Topic$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Topic$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Topic$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'String'>
    readonly module_id: FieldRef<"Topic", 'String'>
    readonly position: FieldRef<"Topic", 'Float'>
    readonly title: FieldRef<"Topic", 'String'>
    readonly content: FieldRef<"Topic", 'String'>
    readonly goal: FieldRef<"Topic", 'String'>
    readonly created_at: FieldRef<"Topic", 'DateTime'>
    readonly updated_at: FieldRef<"Topic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
  }

  /**
   * Topic updateManyAndReturn
   */
  export type TopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
    /**
     * Limit how many Topics to delete.
     */
    limit?: number
  }

  /**
   * Topic.resources
   */
  export type Topic$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    where?: TopicResourceWhereInput
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    cursor?: TopicResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicResourceScalarFieldEnum | TopicResourceScalarFieldEnum[]
  }

  /**
   * Topic.sessions
   */
  export type Topic$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Topic
     */
    omit?: TopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model Resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    title: number
    description: number
    url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ResourceMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resource to aggregate.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type ResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResourceWhereInput
    orderBy?: ResourceOrderByWithAggregationInput | ResourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: ResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: string
    title: string
    description: string | null
    url: string
    created_at: Date
    updated_at: Date
    _count: ResourceCountAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends ResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type ResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
    topicResources?: boolean | Resource$topicResourcesArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["resource"]>

  export type ResourceSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "url" | "created_at" | "updated_at", ExtArgs["result"]["resource"]>
  export type ResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicResources?: boolean | Resource$topicResourcesArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resource"
    objects: {
      topicResources: Prisma.$TopicResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type ResourceGetPayload<S extends boolean | null | undefined | ResourceDefaultArgs> = $Result.GetResult<Prisma.$ResourcePayload, S>

  type ResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface ResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resource'], meta: { name: 'Resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {ResourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResourceFindUniqueArgs>(args: SelectSubset<T, ResourceFindUniqueArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResourceFindFirstArgs>(args?: SelectSubset<T, ResourceFindFirstArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResourceFindManyArgs>(args?: SelectSubset<T, ResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {ResourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends ResourceCreateArgs>(args: SelectSubset<T, ResourceCreateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {ResourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResourceCreateManyArgs>(args?: SelectSubset<T, ResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {ResourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {ResourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends ResourceDeleteArgs>(args: SelectSubset<T, ResourceDeleteArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {ResourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResourceUpdateArgs>(args: SelectSubset<T, ResourceUpdateArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {ResourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResourceDeleteManyArgs>(args?: SelectSubset<T, ResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResourceUpdateManyArgs>(args: SelectSubset<T, ResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {ResourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {ResourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends ResourceUpsertArgs>(args: SelectSubset<T, ResourceUpsertArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends ResourceCountArgs>(
      args?: Subset<T, ResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResourceGroupByArgs['orderBy'] }
        : { orderBy?: ResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resource model
   */
  readonly fields: ResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topicResources<T extends Resource$topicResourcesArgs<ExtArgs> = {}>(args?: Subset<T, Resource$topicResourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resource model
   */
  interface ResourceFieldRefs {
    readonly id: FieldRef<"Resource", 'String'>
    readonly title: FieldRef<"Resource", 'String'>
    readonly description: FieldRef<"Resource", 'String'>
    readonly url: FieldRef<"Resource", 'String'>
    readonly created_at: FieldRef<"Resource", 'DateTime'>
    readonly updated_at: FieldRef<"Resource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resource findUnique
   */
  export type ResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findUniqueOrThrow
   */
  export type ResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource findFirst
   */
  export type ResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findFirstOrThrow
   */
  export type ResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resource to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource findMany
   */
  export type ResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter, which Resources to fetch.
     */
    where?: ResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resources to fetch.
     */
    orderBy?: ResourceOrderByWithRelationInput | ResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resources.
     */
    cursor?: ResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * Resource create
   */
  export type ResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Resource.
     */
    data: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
  }

  /**
   * Resource createMany
   */
  export type ResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource createManyAndReturn
   */
  export type ResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to create many Resources.
     */
    data: ResourceCreateManyInput | ResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resource update
   */
  export type ResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Resource.
     */
    data: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
    /**
     * Choose, which Resource to update.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource updateMany
   */
  export type ResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource updateManyAndReturn
   */
  export type ResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * The data used to update Resources.
     */
    data: XOR<ResourceUpdateManyMutationInput, ResourceUncheckedUpdateManyInput>
    /**
     * Filter which Resources to update
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to update.
     */
    limit?: number
  }

  /**
   * Resource upsert
   */
  export type ResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Resource to update in case it exists.
     */
    where: ResourceWhereUniqueInput
    /**
     * In case the Resource found by the `where` argument doesn't exist, create a new Resource with this data.
     */
    create: XOR<ResourceCreateInput, ResourceUncheckedCreateInput>
    /**
     * In case the Resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResourceUpdateInput, ResourceUncheckedUpdateInput>
  }

  /**
   * Resource delete
   */
  export type ResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    /**
     * Filter which Resource to delete.
     */
    where: ResourceWhereUniqueInput
  }

  /**
   * Resource deleteMany
   */
  export type ResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resources to delete
     */
    where?: ResourceWhereInput
    /**
     * Limit how many Resources to delete.
     */
    limit?: number
  }

  /**
   * Resource.topicResources
   */
  export type Resource$topicResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    where?: TopicResourceWhereInput
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    cursor?: TopicResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicResourceScalarFieldEnum | TopicResourceScalarFieldEnum[]
  }

  /**
   * Resource without action
   */
  export type ResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
  }


  /**
   * Model TopicResource
   */

  export type AggregateTopicResource = {
    _count: TopicResourceCountAggregateOutputType | null
    _min: TopicResourceMinAggregateOutputType | null
    _max: TopicResourceMaxAggregateOutputType | null
  }

  export type TopicResourceMinAggregateOutputType = {
    id: string | null
    topic_id: string | null
    resource_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TopicResourceMaxAggregateOutputType = {
    id: string | null
    topic_id: string | null
    resource_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TopicResourceCountAggregateOutputType = {
    id: number
    topic_id: number
    resource_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TopicResourceMinAggregateInputType = {
    id?: true
    topic_id?: true
    resource_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TopicResourceMaxAggregateInputType = {
    id?: true
    topic_id?: true
    resource_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TopicResourceCountAggregateInputType = {
    id?: true
    topic_id?: true
    resource_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TopicResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicResource to aggregate.
     */
    where?: TopicResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicResources to fetch.
     */
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicResources
    **/
    _count?: true | TopicResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicResourceMaxAggregateInputType
  }

  export type GetTopicResourceAggregateType<T extends TopicResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicResource[P]>
      : GetScalarType<T[P], AggregateTopicResource[P]>
  }




  export type TopicResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicResourceWhereInput
    orderBy?: TopicResourceOrderByWithAggregationInput | TopicResourceOrderByWithAggregationInput[]
    by: TopicResourceScalarFieldEnum[] | TopicResourceScalarFieldEnum
    having?: TopicResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicResourceCountAggregateInputType | true
    _min?: TopicResourceMinAggregateInputType
    _max?: TopicResourceMaxAggregateInputType
  }

  export type TopicResourceGroupByOutputType = {
    id: string
    topic_id: string
    resource_id: string | null
    created_at: Date
    updated_at: Date
    _count: TopicResourceCountAggregateOutputType | null
    _min: TopicResourceMinAggregateOutputType | null
    _max: TopicResourceMaxAggregateOutputType | null
  }

  type GetTopicResourceGroupByPayload<T extends TopicResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicResourceGroupByOutputType[P]>
            : GetScalarType<T[P], TopicResourceGroupByOutputType[P]>
        }
      >
    >


  export type TopicResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    resource_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }, ExtArgs["result"]["topicResource"]>

  export type TopicResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    resource_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }, ExtArgs["result"]["topicResource"]>

  export type TopicResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    resource_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }, ExtArgs["result"]["topicResource"]>

  export type TopicResourceSelectScalar = {
    id?: boolean
    topic_id?: boolean
    resource_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TopicResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic_id" | "resource_id" | "created_at" | "updated_at", ExtArgs["result"]["topicResource"]>
  export type TopicResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }
  export type TopicResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }
  export type TopicResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
    resource?: boolean | TopicResource$resourceArgs<ExtArgs>
  }

  export type $TopicResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicResource"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
      resource: Prisma.$ResourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topic_id: string
      resource_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["topicResource"]>
    composites: {}
  }

  type TopicResourceGetPayload<S extends boolean | null | undefined | TopicResourceDefaultArgs> = $Result.GetResult<Prisma.$TopicResourcePayload, S>

  type TopicResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicResourceCountAggregateInputType | true
    }

  export interface TopicResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicResource'], meta: { name: 'TopicResource' } }
    /**
     * Find zero or one TopicResource that matches the filter.
     * @param {TopicResourceFindUniqueArgs} args - Arguments to find a TopicResource
     * @example
     * // Get one TopicResource
     * const topicResource = await prisma.topicResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicResourceFindUniqueArgs>(args: SelectSubset<T, TopicResourceFindUniqueArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicResource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicResourceFindUniqueOrThrowArgs} args - Arguments to find a TopicResource
     * @example
     * // Get one TopicResource
     * const topicResource = await prisma.topicResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceFindFirstArgs} args - Arguments to find a TopicResource
     * @example
     * // Get one TopicResource
     * const topicResource = await prisma.topicResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicResourceFindFirstArgs>(args?: SelectSubset<T, TopicResourceFindFirstArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceFindFirstOrThrowArgs} args - Arguments to find a TopicResource
     * @example
     * // Get one TopicResource
     * const topicResource = await prisma.topicResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicResources
     * const topicResources = await prisma.topicResource.findMany()
     * 
     * // Get first 10 TopicResources
     * const topicResources = await prisma.topicResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicResourceWithIdOnly = await prisma.topicResource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicResourceFindManyArgs>(args?: SelectSubset<T, TopicResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicResource.
     * @param {TopicResourceCreateArgs} args - Arguments to create a TopicResource.
     * @example
     * // Create one TopicResource
     * const TopicResource = await prisma.topicResource.create({
     *   data: {
     *     // ... data to create a TopicResource
     *   }
     * })
     * 
     */
    create<T extends TopicResourceCreateArgs>(args: SelectSubset<T, TopicResourceCreateArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicResources.
     * @param {TopicResourceCreateManyArgs} args - Arguments to create many TopicResources.
     * @example
     * // Create many TopicResources
     * const topicResource = await prisma.topicResource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicResourceCreateManyArgs>(args?: SelectSubset<T, TopicResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopicResources and returns the data saved in the database.
     * @param {TopicResourceCreateManyAndReturnArgs} args - Arguments to create many TopicResources.
     * @example
     * // Create many TopicResources
     * const topicResource = await prisma.topicResource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopicResources and only return the `id`
     * const topicResourceWithIdOnly = await prisma.topicResource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopicResource.
     * @param {TopicResourceDeleteArgs} args - Arguments to delete one TopicResource.
     * @example
     * // Delete one TopicResource
     * const TopicResource = await prisma.topicResource.delete({
     *   where: {
     *     // ... filter to delete one TopicResource
     *   }
     * })
     * 
     */
    delete<T extends TopicResourceDeleteArgs>(args: SelectSubset<T, TopicResourceDeleteArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicResource.
     * @param {TopicResourceUpdateArgs} args - Arguments to update one TopicResource.
     * @example
     * // Update one TopicResource
     * const topicResource = await prisma.topicResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicResourceUpdateArgs>(args: SelectSubset<T, TopicResourceUpdateArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicResources.
     * @param {TopicResourceDeleteManyArgs} args - Arguments to filter TopicResources to delete.
     * @example
     * // Delete a few TopicResources
     * const { count } = await prisma.topicResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicResourceDeleteManyArgs>(args?: SelectSubset<T, TopicResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicResources
     * const topicResource = await prisma.topicResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicResourceUpdateManyArgs>(args: SelectSubset<T, TopicResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicResources and returns the data updated in the database.
     * @param {TopicResourceUpdateManyAndReturnArgs} args - Arguments to update many TopicResources.
     * @example
     * // Update many TopicResources
     * const topicResource = await prisma.topicResource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopicResources and only return the `id`
     * const topicResourceWithIdOnly = await prisma.topicResource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopicResource.
     * @param {TopicResourceUpsertArgs} args - Arguments to update or create a TopicResource.
     * @example
     * // Update or create a TopicResource
     * const topicResource = await prisma.topicResource.upsert({
     *   create: {
     *     // ... data to create a TopicResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicResource we want to update
     *   }
     * })
     */
    upsert<T extends TopicResourceUpsertArgs>(args: SelectSubset<T, TopicResourceUpsertArgs<ExtArgs>>): Prisma__TopicResourceClient<$Result.GetResult<Prisma.$TopicResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceCountArgs} args - Arguments to filter TopicResources to count.
     * @example
     * // Count the number of TopicResources
     * const count = await prisma.topicResource.count({
     *   where: {
     *     // ... the filter for the TopicResources we want to count
     *   }
     * })
    **/
    count<T extends TopicResourceCountArgs>(
      args?: Subset<T, TopicResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicResourceAggregateArgs>(args: Subset<T, TopicResourceAggregateArgs>): Prisma.PrismaPromise<GetTopicResourceAggregateType<T>>

    /**
     * Group by TopicResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicResourceGroupByArgs['orderBy'] }
        : { orderBy?: TopicResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicResource model
   */
  readonly fields: TopicResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resource<T extends TopicResource$resourceArgs<ExtArgs> = {}>(args?: Subset<T, TopicResource$resourceArgs<ExtArgs>>): Prisma__ResourceClient<$Result.GetResult<Prisma.$ResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicResource model
   */
  interface TopicResourceFieldRefs {
    readonly id: FieldRef<"TopicResource", 'String'>
    readonly topic_id: FieldRef<"TopicResource", 'String'>
    readonly resource_id: FieldRef<"TopicResource", 'String'>
    readonly created_at: FieldRef<"TopicResource", 'DateTime'>
    readonly updated_at: FieldRef<"TopicResource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TopicResource findUnique
   */
  export type TopicResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter, which TopicResource to fetch.
     */
    where: TopicResourceWhereUniqueInput
  }

  /**
   * TopicResource findUniqueOrThrow
   */
  export type TopicResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter, which TopicResource to fetch.
     */
    where: TopicResourceWhereUniqueInput
  }

  /**
   * TopicResource findFirst
   */
  export type TopicResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter, which TopicResource to fetch.
     */
    where?: TopicResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicResources to fetch.
     */
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicResources.
     */
    cursor?: TopicResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicResources.
     */
    distinct?: TopicResourceScalarFieldEnum | TopicResourceScalarFieldEnum[]
  }

  /**
   * TopicResource findFirstOrThrow
   */
  export type TopicResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter, which TopicResource to fetch.
     */
    where?: TopicResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicResources to fetch.
     */
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicResources.
     */
    cursor?: TopicResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicResources.
     */
    distinct?: TopicResourceScalarFieldEnum | TopicResourceScalarFieldEnum[]
  }

  /**
   * TopicResource findMany
   */
  export type TopicResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter, which TopicResources to fetch.
     */
    where?: TopicResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicResources to fetch.
     */
    orderBy?: TopicResourceOrderByWithRelationInput | TopicResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicResources.
     */
    cursor?: TopicResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicResources.
     */
    skip?: number
    distinct?: TopicResourceScalarFieldEnum | TopicResourceScalarFieldEnum[]
  }

  /**
   * TopicResource create
   */
  export type TopicResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicResource.
     */
    data: XOR<TopicResourceCreateInput, TopicResourceUncheckedCreateInput>
  }

  /**
   * TopicResource createMany
   */
  export type TopicResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicResources.
     */
    data: TopicResourceCreateManyInput | TopicResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicResource createManyAndReturn
   */
  export type TopicResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * The data used to create many TopicResources.
     */
    data: TopicResourceCreateManyInput | TopicResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicResource update
   */
  export type TopicResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicResource.
     */
    data: XOR<TopicResourceUpdateInput, TopicResourceUncheckedUpdateInput>
    /**
     * Choose, which TopicResource to update.
     */
    where: TopicResourceWhereUniqueInput
  }

  /**
   * TopicResource updateMany
   */
  export type TopicResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicResources.
     */
    data: XOR<TopicResourceUpdateManyMutationInput, TopicResourceUncheckedUpdateManyInput>
    /**
     * Filter which TopicResources to update
     */
    where?: TopicResourceWhereInput
    /**
     * Limit how many TopicResources to update.
     */
    limit?: number
  }

  /**
   * TopicResource updateManyAndReturn
   */
  export type TopicResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * The data used to update TopicResources.
     */
    data: XOR<TopicResourceUpdateManyMutationInput, TopicResourceUncheckedUpdateManyInput>
    /**
     * Filter which TopicResources to update
     */
    where?: TopicResourceWhereInput
    /**
     * Limit how many TopicResources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicResource upsert
   */
  export type TopicResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicResource to update in case it exists.
     */
    where: TopicResourceWhereUniqueInput
    /**
     * In case the TopicResource found by the `where` argument doesn't exist, create a new TopicResource with this data.
     */
    create: XOR<TopicResourceCreateInput, TopicResourceUncheckedCreateInput>
    /**
     * In case the TopicResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicResourceUpdateInput, TopicResourceUncheckedUpdateInput>
  }

  /**
   * TopicResource delete
   */
  export type TopicResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
    /**
     * Filter which TopicResource to delete.
     */
    where: TopicResourceWhereUniqueInput
  }

  /**
   * TopicResource deleteMany
   */
  export type TopicResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicResources to delete
     */
    where?: TopicResourceWhereInput
    /**
     * Limit how many TopicResources to delete.
     */
    limit?: number
  }

  /**
   * TopicResource.resource
   */
  export type TopicResource$resourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resource
     */
    select?: ResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resource
     */
    omit?: ResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResourceInclude<ExtArgs> | null
    where?: ResourceWhereInput
  }

  /**
   * TopicResource without action
   */
  export type TopicResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicResource
     */
    select?: TopicResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicResource
     */
    omit?: TopicResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicResourceInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    topic_id: string | null
    session_start: Date | null
    session_end: Date | null
    meeting_id: string | null
    meeting_password: string | null
    meeting_url: string | null
    meeting_recording: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    topic_id: string | null
    session_start: Date | null
    session_end: Date | null
    meeting_id: string | null
    meeting_password: string | null
    meeting_url: string | null
    meeting_recording: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    topic_id: number
    session_start: number
    session_end: number
    meeting_id: number
    meeting_password: number
    meeting_url: number
    meeting_recording: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    topic_id?: true
    session_start?: true
    session_end?: true
    meeting_id?: true
    meeting_password?: true
    meeting_url?: true
    meeting_recording?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    topic_id?: true
    session_start?: true
    session_end?: true
    meeting_id?: true
    meeting_password?: true
    meeting_url?: true
    meeting_recording?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    topic_id?: true
    session_start?: true
    session_end?: true
    meeting_id?: true
    meeting_password?: true
    meeting_url?: true
    meeting_recording?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    topic_id: string
    session_start: Date
    session_end: Date
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording: string | null
    created_at: Date
    updated_at: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    session_start?: boolean
    session_end?: boolean
    meeting_id?: boolean
    meeting_password?: boolean
    meeting_url?: boolean
    meeting_recording?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    session_start?: boolean
    session_end?: boolean
    meeting_id?: boolean
    meeting_password?: boolean
    meeting_url?: boolean
    meeting_recording?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topic_id?: boolean
    session_start?: boolean
    session_end?: boolean
    meeting_id?: boolean
    meeting_password?: boolean
    meeting_url?: boolean
    meeting_recording?: boolean
    created_at?: boolean
    updated_at?: boolean
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    topic_id?: boolean
    session_start?: boolean
    session_end?: boolean
    meeting_id?: boolean
    meeting_password?: boolean
    meeting_url?: boolean
    meeting_recording?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topic_id" | "session_start" | "session_end" | "meeting_id" | "meeting_password" | "meeting_url" | "meeting_recording" | "created_at" | "updated_at", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      topic_id: string
      session_start: Date
      session_end: Date
      meeting_id: string
      meeting_password: string
      meeting_url: string
      meeting_recording: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly topic_id: FieldRef<"Session", 'String'>
    readonly session_start: FieldRef<"Session", 'DateTime'>
    readonly session_end: FieldRef<"Session", 'DateTime'>
    readonly meeting_id: FieldRef<"Session", 'String'>
    readonly meeting_password: FieldRef<"Session", 'String'>
    readonly meeting_url: FieldRef<"Session", 'String'>
    readonly meeting_recording: FieldRef<"Session", 'String'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
    readonly updated_at: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model ClassStudent
   */

  export type AggregateClassStudent = {
    _count: ClassStudentCountAggregateOutputType | null
    _min: ClassStudentMinAggregateOutputType | null
    _max: ClassStudentMaxAggregateOutputType | null
  }

  export type ClassStudentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassStudentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassStudentCountAggregateOutputType = {
    id: number
    user_id: number
    class_id: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassStudentMinAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassStudentMaxAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassStudentCountAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassStudent to aggregate.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassStudents
    **/
    _count?: true | ClassStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassStudentMaxAggregateInputType
  }

  export type GetClassStudentAggregateType<T extends ClassStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateClassStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassStudent[P]>
      : GetScalarType<T[P], AggregateClassStudent[P]>
  }




  export type ClassStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassStudentWhereInput
    orderBy?: ClassStudentOrderByWithAggregationInput | ClassStudentOrderByWithAggregationInput[]
    by: ClassStudentScalarFieldEnum[] | ClassStudentScalarFieldEnum
    having?: ClassStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassStudentCountAggregateInputType | true
    _min?: ClassStudentMinAggregateInputType
    _max?: ClassStudentMaxAggregateInputType
  }

  export type ClassStudentGroupByOutputType = {
    id: string
    user_id: string
    class_id: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: ClassStudentCountAggregateOutputType | null
    _min: ClassStudentMinAggregateOutputType | null
    _max: ClassStudentMaxAggregateOutputType | null
  }

  type GetClassStudentGroupByPayload<T extends ClassStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassStudentGroupByOutputType[P]>
            : GetScalarType<T[P], ClassStudentGroupByOutputType[P]>
        }
      >
    >


  export type ClassStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    attendance?: boolean | ClassStudent$attendanceArgs<ExtArgs>
    _count?: boolean | ClassStudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classStudent"]>

  export type ClassStudentSelectScalar = {
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassStudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "class_id" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["classStudent"]>
  export type ClassStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    attendance?: boolean | ClassStudent$attendanceArgs<ExtArgs>
    _count?: boolean | ClassStudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassStudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ClassStudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $ClassStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassStudent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      class_id: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["classStudent"]>
    composites: {}
  }

  type ClassStudentGetPayload<S extends boolean | null | undefined | ClassStudentDefaultArgs> = $Result.GetResult<Prisma.$ClassStudentPayload, S>

  type ClassStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassStudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassStudentCountAggregateInputType | true
    }

  export interface ClassStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassStudent'], meta: { name: 'ClassStudent' } }
    /**
     * Find zero or one ClassStudent that matches the filter.
     * @param {ClassStudentFindUniqueArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassStudentFindUniqueArgs>(args: SelectSubset<T, ClassStudentFindUniqueArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassStudent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassStudentFindUniqueOrThrowArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindFirstArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassStudentFindFirstArgs>(args?: SelectSubset<T, ClassStudentFindFirstArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindFirstOrThrowArgs} args - Arguments to find a ClassStudent
     * @example
     * // Get one ClassStudent
     * const classStudent = await prisma.classStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassStudents
     * const classStudents = await prisma.classStudent.findMany()
     * 
     * // Get first 10 ClassStudents
     * const classStudents = await prisma.classStudent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassStudentFindManyArgs>(args?: SelectSubset<T, ClassStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassStudent.
     * @param {ClassStudentCreateArgs} args - Arguments to create a ClassStudent.
     * @example
     * // Create one ClassStudent
     * const ClassStudent = await prisma.classStudent.create({
     *   data: {
     *     // ... data to create a ClassStudent
     *   }
     * })
     * 
     */
    create<T extends ClassStudentCreateArgs>(args: SelectSubset<T, ClassStudentCreateArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassStudents.
     * @param {ClassStudentCreateManyArgs} args - Arguments to create many ClassStudents.
     * @example
     * // Create many ClassStudents
     * const classStudent = await prisma.classStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassStudentCreateManyArgs>(args?: SelectSubset<T, ClassStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassStudents and returns the data saved in the database.
     * @param {ClassStudentCreateManyAndReturnArgs} args - Arguments to create many ClassStudents.
     * @example
     * // Create many ClassStudents
     * const classStudent = await prisma.classStudent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassStudents and only return the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassStudentCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassStudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassStudent.
     * @param {ClassStudentDeleteArgs} args - Arguments to delete one ClassStudent.
     * @example
     * // Delete one ClassStudent
     * const ClassStudent = await prisma.classStudent.delete({
     *   where: {
     *     // ... filter to delete one ClassStudent
     *   }
     * })
     * 
     */
    delete<T extends ClassStudentDeleteArgs>(args: SelectSubset<T, ClassStudentDeleteArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassStudent.
     * @param {ClassStudentUpdateArgs} args - Arguments to update one ClassStudent.
     * @example
     * // Update one ClassStudent
     * const classStudent = await prisma.classStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassStudentUpdateArgs>(args: SelectSubset<T, ClassStudentUpdateArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassStudents.
     * @param {ClassStudentDeleteManyArgs} args - Arguments to filter ClassStudents to delete.
     * @example
     * // Delete a few ClassStudents
     * const { count } = await prisma.classStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassStudentDeleteManyArgs>(args?: SelectSubset<T, ClassStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassStudents
     * const classStudent = await prisma.classStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassStudentUpdateManyArgs>(args: SelectSubset<T, ClassStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassStudents and returns the data updated in the database.
     * @param {ClassStudentUpdateManyAndReturnArgs} args - Arguments to update many ClassStudents.
     * @example
     * // Update many ClassStudents
     * const classStudent = await prisma.classStudent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassStudents and only return the `id`
     * const classStudentWithIdOnly = await prisma.classStudent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassStudentUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassStudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassStudent.
     * @param {ClassStudentUpsertArgs} args - Arguments to update or create a ClassStudent.
     * @example
     * // Update or create a ClassStudent
     * const classStudent = await prisma.classStudent.upsert({
     *   create: {
     *     // ... data to create a ClassStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassStudent we want to update
     *   }
     * })
     */
    upsert<T extends ClassStudentUpsertArgs>(args: SelectSubset<T, ClassStudentUpsertArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentCountArgs} args - Arguments to filter ClassStudents to count.
     * @example
     * // Count the number of ClassStudents
     * const count = await prisma.classStudent.count({
     *   where: {
     *     // ... the filter for the ClassStudents we want to count
     *   }
     * })
    **/
    count<T extends ClassStudentCountArgs>(
      args?: Subset<T, ClassStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassStudentAggregateArgs>(args: Subset<T, ClassStudentAggregateArgs>): Prisma.PrismaPromise<GetClassStudentAggregateType<T>>

    /**
     * Group by ClassStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassStudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassStudentGroupByArgs['orderBy'] }
        : { orderBy?: ClassStudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassStudent model
   */
  readonly fields: ClassStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendance<T extends ClassStudent$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, ClassStudent$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassStudent model
   */
  interface ClassStudentFieldRefs {
    readonly id: FieldRef<"ClassStudent", 'String'>
    readonly user_id: FieldRef<"ClassStudent", 'String'>
    readonly class_id: FieldRef<"ClassStudent", 'String'>
    readonly is_active: FieldRef<"ClassStudent", 'Boolean'>
    readonly created_at: FieldRef<"ClassStudent", 'DateTime'>
    readonly updated_at: FieldRef<"ClassStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassStudent findUnique
   */
  export type ClassStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent findUniqueOrThrow
   */
  export type ClassStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent findFirst
   */
  export type ClassStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassStudents.
     */
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent findFirstOrThrow
   */
  export type ClassStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudent to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassStudents.
     */
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent findMany
   */
  export type ClassStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter, which ClassStudents to fetch.
     */
    where?: ClassStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassStudents to fetch.
     */
    orderBy?: ClassStudentOrderByWithRelationInput | ClassStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassStudents.
     */
    cursor?: ClassStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassStudents.
     */
    skip?: number
    distinct?: ClassStudentScalarFieldEnum | ClassStudentScalarFieldEnum[]
  }

  /**
   * ClassStudent create
   */
  export type ClassStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassStudent.
     */
    data: XOR<ClassStudentCreateInput, ClassStudentUncheckedCreateInput>
  }

  /**
   * ClassStudent createMany
   */
  export type ClassStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassStudents.
     */
    data: ClassStudentCreateManyInput | ClassStudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassStudent createManyAndReturn
   */
  export type ClassStudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * The data used to create many ClassStudents.
     */
    data: ClassStudentCreateManyInput | ClassStudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassStudent update
   */
  export type ClassStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassStudent.
     */
    data: XOR<ClassStudentUpdateInput, ClassStudentUncheckedUpdateInput>
    /**
     * Choose, which ClassStudent to update.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent updateMany
   */
  export type ClassStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassStudents.
     */
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyInput>
    /**
     * Filter which ClassStudents to update
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to update.
     */
    limit?: number
  }

  /**
   * ClassStudent updateManyAndReturn
   */
  export type ClassStudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * The data used to update ClassStudents.
     */
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyInput>
    /**
     * Filter which ClassStudents to update
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassStudent upsert
   */
  export type ClassStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassStudent to update in case it exists.
     */
    where: ClassStudentWhereUniqueInput
    /**
     * In case the ClassStudent found by the `where` argument doesn't exist, create a new ClassStudent with this data.
     */
    create: XOR<ClassStudentCreateInput, ClassStudentUncheckedCreateInput>
    /**
     * In case the ClassStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassStudentUpdateInput, ClassStudentUncheckedUpdateInput>
  }

  /**
   * ClassStudent delete
   */
  export type ClassStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
    /**
     * Filter which ClassStudent to delete.
     */
    where: ClassStudentWhereUniqueInput
  }

  /**
   * ClassStudent deleteMany
   */
  export type ClassStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassStudents to delete
     */
    where?: ClassStudentWhereInput
    /**
     * Limit how many ClassStudents to delete.
     */
    limit?: number
  }

  /**
   * ClassStudent.attendance
   */
  export type ClassStudent$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * ClassStudent without action
   */
  export type ClassStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassStudent
     */
    select?: ClassStudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassStudent
     */
    omit?: ClassStudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassStudentInclude<ExtArgs> | null
  }


  /**
   * Model ClassTeacher
   */

  export type AggregateClassTeacher = {
    _count: ClassTeacherCountAggregateOutputType | null
    _min: ClassTeacherMinAggregateOutputType | null
    _max: ClassTeacherMaxAggregateOutputType | null
  }

  export type ClassTeacherMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassTeacherMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    class_id: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassTeacherCountAggregateOutputType = {
    id: number
    user_id: number
    class_id: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassTeacherMinAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassTeacherMaxAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassTeacherCountAggregateInputType = {
    id?: true
    user_id?: true
    class_id?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassTeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassTeacher to aggregate.
     */
    where?: ClassTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTeachers to fetch.
     */
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassTeachers
    **/
    _count?: true | ClassTeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassTeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassTeacherMaxAggregateInputType
  }

  export type GetClassTeacherAggregateType<T extends ClassTeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateClassTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassTeacher[P]>
      : GetScalarType<T[P], AggregateClassTeacher[P]>
  }




  export type ClassTeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassTeacherWhereInput
    orderBy?: ClassTeacherOrderByWithAggregationInput | ClassTeacherOrderByWithAggregationInput[]
    by: ClassTeacherScalarFieldEnum[] | ClassTeacherScalarFieldEnum
    having?: ClassTeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassTeacherCountAggregateInputType | true
    _min?: ClassTeacherMinAggregateInputType
    _max?: ClassTeacherMaxAggregateInputType
  }

  export type ClassTeacherGroupByOutputType = {
    id: string
    user_id: string
    class_id: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: ClassTeacherCountAggregateOutputType | null
    _min: ClassTeacherMinAggregateOutputType | null
    _max: ClassTeacherMaxAggregateOutputType | null
  }

  type GetClassTeacherGroupByPayload<T extends ClassTeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassTeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassTeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassTeacherGroupByOutputType[P]>
            : GetScalarType<T[P], ClassTeacherGroupByOutputType[P]>
        }
      >
    >


  export type ClassTeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classTeacher"]>

  export type ClassTeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classTeacher"]>

  export type ClassTeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classTeacher"]>

  export type ClassTeacherSelectScalar = {
    id?: boolean
    user_id?: boolean
    class_id?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassTeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "class_id" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["classTeacher"]>
  export type ClassTeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ClassTeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type ClassTeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $ClassTeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassTeacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      class_id: string
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["classTeacher"]>
    composites: {}
  }

  type ClassTeacherGetPayload<S extends boolean | null | undefined | ClassTeacherDefaultArgs> = $Result.GetResult<Prisma.$ClassTeacherPayload, S>

  type ClassTeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassTeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassTeacherCountAggregateInputType | true
    }

  export interface ClassTeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassTeacher'], meta: { name: 'ClassTeacher' } }
    /**
     * Find zero or one ClassTeacher that matches the filter.
     * @param {ClassTeacherFindUniqueArgs} args - Arguments to find a ClassTeacher
     * @example
     * // Get one ClassTeacher
     * const classTeacher = await prisma.classTeacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassTeacherFindUniqueArgs>(args: SelectSubset<T, ClassTeacherFindUniqueArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassTeacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassTeacherFindUniqueOrThrowArgs} args - Arguments to find a ClassTeacher
     * @example
     * // Get one ClassTeacher
     * const classTeacher = await prisma.classTeacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassTeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassTeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassTeacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherFindFirstArgs} args - Arguments to find a ClassTeacher
     * @example
     * // Get one ClassTeacher
     * const classTeacher = await prisma.classTeacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassTeacherFindFirstArgs>(args?: SelectSubset<T, ClassTeacherFindFirstArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassTeacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherFindFirstOrThrowArgs} args - Arguments to find a ClassTeacher
     * @example
     * // Get one ClassTeacher
     * const classTeacher = await prisma.classTeacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassTeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassTeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassTeachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassTeachers
     * const classTeachers = await prisma.classTeacher.findMany()
     * 
     * // Get first 10 ClassTeachers
     * const classTeachers = await prisma.classTeacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classTeacherWithIdOnly = await prisma.classTeacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassTeacherFindManyArgs>(args?: SelectSubset<T, ClassTeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassTeacher.
     * @param {ClassTeacherCreateArgs} args - Arguments to create a ClassTeacher.
     * @example
     * // Create one ClassTeacher
     * const ClassTeacher = await prisma.classTeacher.create({
     *   data: {
     *     // ... data to create a ClassTeacher
     *   }
     * })
     * 
     */
    create<T extends ClassTeacherCreateArgs>(args: SelectSubset<T, ClassTeacherCreateArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassTeachers.
     * @param {ClassTeacherCreateManyArgs} args - Arguments to create many ClassTeachers.
     * @example
     * // Create many ClassTeachers
     * const classTeacher = await prisma.classTeacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassTeacherCreateManyArgs>(args?: SelectSubset<T, ClassTeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassTeachers and returns the data saved in the database.
     * @param {ClassTeacherCreateManyAndReturnArgs} args - Arguments to create many ClassTeachers.
     * @example
     * // Create many ClassTeachers
     * const classTeacher = await prisma.classTeacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassTeachers and only return the `id`
     * const classTeacherWithIdOnly = await prisma.classTeacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassTeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassTeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassTeacher.
     * @param {ClassTeacherDeleteArgs} args - Arguments to delete one ClassTeacher.
     * @example
     * // Delete one ClassTeacher
     * const ClassTeacher = await prisma.classTeacher.delete({
     *   where: {
     *     // ... filter to delete one ClassTeacher
     *   }
     * })
     * 
     */
    delete<T extends ClassTeacherDeleteArgs>(args: SelectSubset<T, ClassTeacherDeleteArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassTeacher.
     * @param {ClassTeacherUpdateArgs} args - Arguments to update one ClassTeacher.
     * @example
     * // Update one ClassTeacher
     * const classTeacher = await prisma.classTeacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassTeacherUpdateArgs>(args: SelectSubset<T, ClassTeacherUpdateArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassTeachers.
     * @param {ClassTeacherDeleteManyArgs} args - Arguments to filter ClassTeachers to delete.
     * @example
     * // Delete a few ClassTeachers
     * const { count } = await prisma.classTeacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassTeacherDeleteManyArgs>(args?: SelectSubset<T, ClassTeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassTeachers
     * const classTeacher = await prisma.classTeacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassTeacherUpdateManyArgs>(args: SelectSubset<T, ClassTeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassTeachers and returns the data updated in the database.
     * @param {ClassTeacherUpdateManyAndReturnArgs} args - Arguments to update many ClassTeachers.
     * @example
     * // Update many ClassTeachers
     * const classTeacher = await prisma.classTeacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassTeachers and only return the `id`
     * const classTeacherWithIdOnly = await prisma.classTeacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassTeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassTeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassTeacher.
     * @param {ClassTeacherUpsertArgs} args - Arguments to update or create a ClassTeacher.
     * @example
     * // Update or create a ClassTeacher
     * const classTeacher = await prisma.classTeacher.upsert({
     *   create: {
     *     // ... data to create a ClassTeacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassTeacher we want to update
     *   }
     * })
     */
    upsert<T extends ClassTeacherUpsertArgs>(args: SelectSubset<T, ClassTeacherUpsertArgs<ExtArgs>>): Prisma__ClassTeacherClient<$Result.GetResult<Prisma.$ClassTeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherCountArgs} args - Arguments to filter ClassTeachers to count.
     * @example
     * // Count the number of ClassTeachers
     * const count = await prisma.classTeacher.count({
     *   where: {
     *     // ... the filter for the ClassTeachers we want to count
     *   }
     * })
    **/
    count<T extends ClassTeacherCountArgs>(
      args?: Subset<T, ClassTeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassTeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassTeacherAggregateArgs>(args: Subset<T, ClassTeacherAggregateArgs>): Prisma.PrismaPromise<GetClassTeacherAggregateType<T>>

    /**
     * Group by ClassTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassTeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassTeacherGroupByArgs['orderBy'] }
        : { orderBy?: ClassTeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassTeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassTeacher model
   */
  readonly fields: ClassTeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassTeacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassTeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassTeacher model
   */
  interface ClassTeacherFieldRefs {
    readonly id: FieldRef<"ClassTeacher", 'String'>
    readonly user_id: FieldRef<"ClassTeacher", 'String'>
    readonly class_id: FieldRef<"ClassTeacher", 'String'>
    readonly is_active: FieldRef<"ClassTeacher", 'Boolean'>
    readonly created_at: FieldRef<"ClassTeacher", 'DateTime'>
    readonly updated_at: FieldRef<"ClassTeacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassTeacher findUnique
   */
  export type ClassTeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ClassTeacher to fetch.
     */
    where: ClassTeacherWhereUniqueInput
  }

  /**
   * ClassTeacher findUniqueOrThrow
   */
  export type ClassTeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ClassTeacher to fetch.
     */
    where: ClassTeacherWhereUniqueInput
  }

  /**
   * ClassTeacher findFirst
   */
  export type ClassTeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ClassTeacher to fetch.
     */
    where?: ClassTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTeachers to fetch.
     */
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassTeachers.
     */
    cursor?: ClassTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassTeachers.
     */
    distinct?: ClassTeacherScalarFieldEnum | ClassTeacherScalarFieldEnum[]
  }

  /**
   * ClassTeacher findFirstOrThrow
   */
  export type ClassTeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ClassTeacher to fetch.
     */
    where?: ClassTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTeachers to fetch.
     */
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassTeachers.
     */
    cursor?: ClassTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassTeachers.
     */
    distinct?: ClassTeacherScalarFieldEnum | ClassTeacherScalarFieldEnum[]
  }

  /**
   * ClassTeacher findMany
   */
  export type ClassTeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ClassTeachers to fetch.
     */
    where?: ClassTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTeachers to fetch.
     */
    orderBy?: ClassTeacherOrderByWithRelationInput | ClassTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassTeachers.
     */
    cursor?: ClassTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTeachers.
     */
    skip?: number
    distinct?: ClassTeacherScalarFieldEnum | ClassTeacherScalarFieldEnum[]
  }

  /**
   * ClassTeacher create
   */
  export type ClassTeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassTeacher.
     */
    data: XOR<ClassTeacherCreateInput, ClassTeacherUncheckedCreateInput>
  }

  /**
   * ClassTeacher createMany
   */
  export type ClassTeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassTeachers.
     */
    data: ClassTeacherCreateManyInput | ClassTeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassTeacher createManyAndReturn
   */
  export type ClassTeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * The data used to create many ClassTeachers.
     */
    data: ClassTeacherCreateManyInput | ClassTeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassTeacher update
   */
  export type ClassTeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassTeacher.
     */
    data: XOR<ClassTeacherUpdateInput, ClassTeacherUncheckedUpdateInput>
    /**
     * Choose, which ClassTeacher to update.
     */
    where: ClassTeacherWhereUniqueInput
  }

  /**
   * ClassTeacher updateMany
   */
  export type ClassTeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassTeachers.
     */
    data: XOR<ClassTeacherUpdateManyMutationInput, ClassTeacherUncheckedUpdateManyInput>
    /**
     * Filter which ClassTeachers to update
     */
    where?: ClassTeacherWhereInput
    /**
     * Limit how many ClassTeachers to update.
     */
    limit?: number
  }

  /**
   * ClassTeacher updateManyAndReturn
   */
  export type ClassTeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * The data used to update ClassTeachers.
     */
    data: XOR<ClassTeacherUpdateManyMutationInput, ClassTeacherUncheckedUpdateManyInput>
    /**
     * Filter which ClassTeachers to update
     */
    where?: ClassTeacherWhereInput
    /**
     * Limit how many ClassTeachers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClassTeacher upsert
   */
  export type ClassTeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassTeacher to update in case it exists.
     */
    where: ClassTeacherWhereUniqueInput
    /**
     * In case the ClassTeacher found by the `where` argument doesn't exist, create a new ClassTeacher with this data.
     */
    create: XOR<ClassTeacherCreateInput, ClassTeacherUncheckedCreateInput>
    /**
     * In case the ClassTeacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassTeacherUpdateInput, ClassTeacherUncheckedUpdateInput>
  }

  /**
   * ClassTeacher delete
   */
  export type ClassTeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
    /**
     * Filter which ClassTeacher to delete.
     */
    where: ClassTeacherWhereUniqueInput
  }

  /**
   * ClassTeacher deleteMany
   */
  export type ClassTeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassTeachers to delete
     */
    where?: ClassTeacherWhereInput
    /**
     * Limit how many ClassTeachers to delete.
     */
    limit?: number
  }

  /**
   * ClassTeacher without action
   */
  export type ClassTeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassTeacher
     */
    select?: ClassTeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassTeacher
     */
    omit?: ClassTeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTeacherInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    website: string | null
    logo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    website: string | null
    logo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    website: number
    logo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    website?: true
    logo?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    website?: true
    logo?: true
    created_at?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    website?: true
    logo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    address: string | null
    website: string | null
    logo: string | null
    created_at: Date
    updated_at: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    website?: boolean
    logo?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    classes?: boolean | Company$classesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    website?: boolean
    logo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    website?: boolean
    logo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    website?: boolean
    logo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "website" | "logo" | "created_at" | "updated_at", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    classes?: boolean | Company$classesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      website: string | null
      logo: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends Company$classesArgs<ExtArgs> = {}>(args?: Subset<T, Company$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly website: FieldRef<"Company", 'String'>
    readonly logo: FieldRef<"Company", 'String'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
    readonly updated_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.classes
   */
  export type Company$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model ClassType
   */

  export type AggregateClassType = {
    _count: ClassTypeCountAggregateOutputType | null
    _min: ClassTypeMinAggregateOutputType | null
    _max: ClassTypeMaxAggregateOutputType | null
  }

  export type ClassTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClassTypeCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClassTypeMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassTypeMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type ClassTypeCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClassTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassType to aggregate.
     */
    where?: ClassTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTypes to fetch.
     */
    orderBy?: ClassTypeOrderByWithRelationInput | ClassTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassTypes
    **/
    _count?: true | ClassTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassTypeMaxAggregateInputType
  }

  export type GetClassTypeAggregateType<T extends ClassTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateClassType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassType[P]>
      : GetScalarType<T[P], AggregateClassType[P]>
  }




  export type ClassTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassTypeWhereInput
    orderBy?: ClassTypeOrderByWithAggregationInput | ClassTypeOrderByWithAggregationInput[]
    by: ClassTypeScalarFieldEnum[] | ClassTypeScalarFieldEnum
    having?: ClassTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassTypeCountAggregateInputType | true
    _min?: ClassTypeMinAggregateInputType
    _max?: ClassTypeMaxAggregateInputType
  }

  export type ClassTypeGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: ClassTypeCountAggregateOutputType | null
    _min: ClassTypeMinAggregateOutputType | null
    _max: ClassTypeMaxAggregateOutputType | null
  }

  type GetClassTypeGroupByPayload<T extends ClassTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ClassTypeGroupByOutputType[P]>
        }
      >
    >


  export type ClassTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    classes?: boolean | ClassType$classesArgs<ExtArgs>
    _count?: boolean | ClassTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classType"]>

  export type ClassTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["classType"]>

  export type ClassTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["classType"]>

  export type ClassTypeSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ClassTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["classType"]>
  export type ClassTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classes?: boolean | ClassType$classesArgs<ExtArgs>
    _count?: boolean | ClassTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClassTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassType"
    objects: {
      classes: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["classType"]>
    composites: {}
  }

  type ClassTypeGetPayload<S extends boolean | null | undefined | ClassTypeDefaultArgs> = $Result.GetResult<Prisma.$ClassTypePayload, S>

  type ClassTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassTypeCountAggregateInputType | true
    }

  export interface ClassTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassType'], meta: { name: 'ClassType' } }
    /**
     * Find zero or one ClassType that matches the filter.
     * @param {ClassTypeFindUniqueArgs} args - Arguments to find a ClassType
     * @example
     * // Get one ClassType
     * const classType = await prisma.classType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassTypeFindUniqueArgs>(args: SelectSubset<T, ClassTypeFindUniqueArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassTypeFindUniqueOrThrowArgs} args - Arguments to find a ClassType
     * @example
     * // Get one ClassType
     * const classType = await prisma.classType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeFindFirstArgs} args - Arguments to find a ClassType
     * @example
     * // Get one ClassType
     * const classType = await prisma.classType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassTypeFindFirstArgs>(args?: SelectSubset<T, ClassTypeFindFirstArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeFindFirstOrThrowArgs} args - Arguments to find a ClassType
     * @example
     * // Get one ClassType
     * const classType = await prisma.classType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassTypes
     * const classTypes = await prisma.classType.findMany()
     * 
     * // Get first 10 ClassTypes
     * const classTypes = await prisma.classType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classTypeWithIdOnly = await prisma.classType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassTypeFindManyArgs>(args?: SelectSubset<T, ClassTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassType.
     * @param {ClassTypeCreateArgs} args - Arguments to create a ClassType.
     * @example
     * // Create one ClassType
     * const ClassType = await prisma.classType.create({
     *   data: {
     *     // ... data to create a ClassType
     *   }
     * })
     * 
     */
    create<T extends ClassTypeCreateArgs>(args: SelectSubset<T, ClassTypeCreateArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassTypes.
     * @param {ClassTypeCreateManyArgs} args - Arguments to create many ClassTypes.
     * @example
     * // Create many ClassTypes
     * const classType = await prisma.classType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassTypeCreateManyArgs>(args?: SelectSubset<T, ClassTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClassTypes and returns the data saved in the database.
     * @param {ClassTypeCreateManyAndReturnArgs} args - Arguments to create many ClassTypes.
     * @example
     * // Create many ClassTypes
     * const classType = await prisma.classType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClassTypes and only return the `id`
     * const classTypeWithIdOnly = await prisma.classType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClassType.
     * @param {ClassTypeDeleteArgs} args - Arguments to delete one ClassType.
     * @example
     * // Delete one ClassType
     * const ClassType = await prisma.classType.delete({
     *   where: {
     *     // ... filter to delete one ClassType
     *   }
     * })
     * 
     */
    delete<T extends ClassTypeDeleteArgs>(args: SelectSubset<T, ClassTypeDeleteArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassType.
     * @param {ClassTypeUpdateArgs} args - Arguments to update one ClassType.
     * @example
     * // Update one ClassType
     * const classType = await prisma.classType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassTypeUpdateArgs>(args: SelectSubset<T, ClassTypeUpdateArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassTypes.
     * @param {ClassTypeDeleteManyArgs} args - Arguments to filter ClassTypes to delete.
     * @example
     * // Delete a few ClassTypes
     * const { count } = await prisma.classType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassTypeDeleteManyArgs>(args?: SelectSubset<T, ClassTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassTypes
     * const classType = await prisma.classType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassTypeUpdateManyArgs>(args: SelectSubset<T, ClassTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassTypes and returns the data updated in the database.
     * @param {ClassTypeUpdateManyAndReturnArgs} args - Arguments to update many ClassTypes.
     * @example
     * // Update many ClassTypes
     * const classType = await prisma.classType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClassTypes and only return the `id`
     * const classTypeWithIdOnly = await prisma.classType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClassType.
     * @param {ClassTypeUpsertArgs} args - Arguments to update or create a ClassType.
     * @example
     * // Update or create a ClassType
     * const classType = await prisma.classType.upsert({
     *   create: {
     *     // ... data to create a ClassType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassType we want to update
     *   }
     * })
     */
    upsert<T extends ClassTypeUpsertArgs>(args: SelectSubset<T, ClassTypeUpsertArgs<ExtArgs>>): Prisma__ClassTypeClient<$Result.GetResult<Prisma.$ClassTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeCountArgs} args - Arguments to filter ClassTypes to count.
     * @example
     * // Count the number of ClassTypes
     * const count = await prisma.classType.count({
     *   where: {
     *     // ... the filter for the ClassTypes we want to count
     *   }
     * })
    **/
    count<T extends ClassTypeCountArgs>(
      args?: Subset<T, ClassTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassTypeAggregateArgs>(args: Subset<T, ClassTypeAggregateArgs>): Prisma.PrismaPromise<GetClassTypeAggregateType<T>>

    /**
     * Group by ClassType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassTypeGroupByArgs['orderBy'] }
        : { orderBy?: ClassTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassType model
   */
  readonly fields: ClassTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classes<T extends ClassType$classesArgs<ExtArgs> = {}>(args?: Subset<T, ClassType$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassType model
   */
  interface ClassTypeFieldRefs {
    readonly id: FieldRef<"ClassType", 'String'>
    readonly name: FieldRef<"ClassType", 'String'>
    readonly created_at: FieldRef<"ClassType", 'DateTime'>
    readonly updated_at: FieldRef<"ClassType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassType findUnique
   */
  export type ClassTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassType to fetch.
     */
    where: ClassTypeWhereUniqueInput
  }

  /**
   * ClassType findUniqueOrThrow
   */
  export type ClassTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassType to fetch.
     */
    where: ClassTypeWhereUniqueInput
  }

  /**
   * ClassType findFirst
   */
  export type ClassTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassType to fetch.
     */
    where?: ClassTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTypes to fetch.
     */
    orderBy?: ClassTypeOrderByWithRelationInput | ClassTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassTypes.
     */
    cursor?: ClassTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassTypes.
     */
    distinct?: ClassTypeScalarFieldEnum | ClassTypeScalarFieldEnum[]
  }

  /**
   * ClassType findFirstOrThrow
   */
  export type ClassTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassType to fetch.
     */
    where?: ClassTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTypes to fetch.
     */
    orderBy?: ClassTypeOrderByWithRelationInput | ClassTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassTypes.
     */
    cursor?: ClassTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassTypes.
     */
    distinct?: ClassTypeScalarFieldEnum | ClassTypeScalarFieldEnum[]
  }

  /**
   * ClassType findMany
   */
  export type ClassTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter, which ClassTypes to fetch.
     */
    where?: ClassTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassTypes to fetch.
     */
    orderBy?: ClassTypeOrderByWithRelationInput | ClassTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassTypes.
     */
    cursor?: ClassTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassTypes.
     */
    skip?: number
    distinct?: ClassTypeScalarFieldEnum | ClassTypeScalarFieldEnum[]
  }

  /**
   * ClassType create
   */
  export type ClassTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassType.
     */
    data: XOR<ClassTypeCreateInput, ClassTypeUncheckedCreateInput>
  }

  /**
   * ClassType createMany
   */
  export type ClassTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassTypes.
     */
    data: ClassTypeCreateManyInput | ClassTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassType createManyAndReturn
   */
  export type ClassTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * The data used to create many ClassTypes.
     */
    data: ClassTypeCreateManyInput | ClassTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassType update
   */
  export type ClassTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassType.
     */
    data: XOR<ClassTypeUpdateInput, ClassTypeUncheckedUpdateInput>
    /**
     * Choose, which ClassType to update.
     */
    where: ClassTypeWhereUniqueInput
  }

  /**
   * ClassType updateMany
   */
  export type ClassTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassTypes.
     */
    data: XOR<ClassTypeUpdateManyMutationInput, ClassTypeUncheckedUpdateManyInput>
    /**
     * Filter which ClassTypes to update
     */
    where?: ClassTypeWhereInput
    /**
     * Limit how many ClassTypes to update.
     */
    limit?: number
  }

  /**
   * ClassType updateManyAndReturn
   */
  export type ClassTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * The data used to update ClassTypes.
     */
    data: XOR<ClassTypeUpdateManyMutationInput, ClassTypeUncheckedUpdateManyInput>
    /**
     * Filter which ClassTypes to update
     */
    where?: ClassTypeWhereInput
    /**
     * Limit how many ClassTypes to update.
     */
    limit?: number
  }

  /**
   * ClassType upsert
   */
  export type ClassTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassType to update in case it exists.
     */
    where: ClassTypeWhereUniqueInput
    /**
     * In case the ClassType found by the `where` argument doesn't exist, create a new ClassType with this data.
     */
    create: XOR<ClassTypeCreateInput, ClassTypeUncheckedCreateInput>
    /**
     * In case the ClassType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassTypeUpdateInput, ClassTypeUncheckedUpdateInput>
  }

  /**
   * ClassType delete
   */
  export type ClassTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
    /**
     * Filter which ClassType to delete.
     */
    where: ClassTypeWhereUniqueInput
  }

  /**
   * ClassType deleteMany
   */
  export type ClassTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassTypes to delete
     */
    where?: ClassTypeWhereInput
    /**
     * Limit how many ClassTypes to delete.
     */
    limit?: number
  }

  /**
   * ClassType.classes
   */
  export type ClassType$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * ClassType without action
   */
  export type ClassTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassType
     */
    select?: ClassTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassType
     */
    omit?: ClassTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassTypeInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    class_student_id: string | null
    description: $Enums.AttendanceStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    class_student_id: string | null
    description: $Enums.AttendanceStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    class_student_id: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    class_student_id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    class_student_id?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    class_student_id?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    class_student_id: string
    description: $Enums.AttendanceStatus
    created_at: Date
    updated_at: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_student_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_student_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_student_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    class_student_id?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "class_student_id" | "description" | "created_at" | "updated_at", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classStudent?: boolean | ClassStudentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      classStudent: Prisma.$ClassStudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      class_student_id: string
      description: $Enums.AttendanceStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classStudent<T extends ClassStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassStudentDefaultArgs<ExtArgs>>): Prisma__ClassStudentClient<$Result.GetResult<Prisma.$ClassStudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly class_student_id: FieldRef<"Attendance", 'String'>
    readonly description: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly created_at: FieldRef<"Attendance", 'DateTime'>
    readonly updated_at: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClassScalarFieldEnum: {
    id: 'id',
    syllabus_id: 'syllabus_id',
    company_id: 'company_id',
    type_id: 'type_id',
    name: 'name',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    company_id: 'company_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    photo: 'photo',
    gender: 'gender',
    address: 'address',
    role: 'role',
    is_email_verified: 'is_email_verified',
    is_phone_verified: 'is_phone_verified',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SyllabusScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SyllabusScalarFieldEnum = (typeof SyllabusScalarFieldEnum)[keyof typeof SyllabusScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    syllabus_id: 'syllabus_id',
    position: 'position',
    title: 'title',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    module_id: 'module_id',
    position: 'position',
    title: 'title',
    content: 'content',
    goal: 'goal',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    url: 'url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const TopicResourceScalarFieldEnum: {
    id: 'id',
    topic_id: 'topic_id',
    resource_id: 'resource_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TopicResourceScalarFieldEnum = (typeof TopicResourceScalarFieldEnum)[keyof typeof TopicResourceScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    topic_id: 'topic_id',
    session_start: 'session_start',
    session_end: 'session_end',
    meeting_id: 'meeting_id',
    meeting_password: 'meeting_password',
    meeting_url: 'meeting_url',
    meeting_recording: 'meeting_recording',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ClassStudentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    class_id: 'class_id',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassStudentScalarFieldEnum = (typeof ClassStudentScalarFieldEnum)[keyof typeof ClassStudentScalarFieldEnum]


  export const ClassTeacherScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    class_id: 'class_id',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassTeacherScalarFieldEnum = (typeof ClassTeacherScalarFieldEnum)[keyof typeof ClassTeacherScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    website: 'website',
    logo: 'logo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const ClassTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClassTypeScalarFieldEnum = (typeof ClassTypeScalarFieldEnum)[keyof typeof ClassTypeScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    class_student_id: 'class_student_id',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    syllabus_id?: StringFilter<"Class"> | string
    company_id?: StringFilter<"Class"> | string
    type_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    is_active?: BoolFilter<"Class"> | boolean
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
    syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    type?: XOR<ClassTypeScalarRelationFilter, ClassTypeWhereInput>
    students?: ClassStudentListRelationFilter
    teachers?: ClassTeacherListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    company_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    syllabus?: SyllabusOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    type?: ClassTypeOrderByWithRelationInput
    students?: ClassStudentOrderByRelationAggregateInput
    teachers?: ClassTeacherOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syllabus_id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    company_id?: StringFilter<"Class"> | string
    type_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    is_active?: BoolFilter<"Class"> | boolean
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
    syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    type?: XOR<ClassTypeScalarRelationFilter, ClassTypeWhereInput>
    students?: ClassStudentListRelationFilter
    teachers?: ClassTeacherListRelationFilter
  }, "id" | "syllabus_id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    company_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    syllabus_id?: StringWithAggregatesFilter<"Class"> | string
    company_id?: StringWithAggregatesFilter<"Class"> | string
    type_id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    description?: StringNullableWithAggregatesFilter<"Class"> | string | null
    is_active?: BoolWithAggregatesFilter<"Class"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    company_id?: StringNullableFilter<"User"> | string | null
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_email_verified?: BoolFilter<"User"> | boolean
    is_phone_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    classStudents?: ClassStudentListRelationFilter
    classTeachers?: ClassTeacherListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    is_email_verified?: SortOrder
    is_phone_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company?: CompanyOrderByWithRelationInput
    classStudents?: ClassStudentOrderByRelationAggregateInput
    classTeachers?: ClassTeacherOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    company_id?: StringNullableFilter<"User"> | string | null
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_email_verified?: BoolFilter<"User"> | boolean
    is_phone_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
    classStudents?: ClassStudentListRelationFilter
    classTeachers?: ClassTeacherListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    is_email_verified?: SortOrder
    is_phone_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    company_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    address?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_email_verified?: BoolWithAggregatesFilter<"User"> | boolean
    is_phone_verified?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SyllabusWhereInput = {
    AND?: SyllabusWhereInput | SyllabusWhereInput[]
    OR?: SyllabusWhereInput[]
    NOT?: SyllabusWhereInput | SyllabusWhereInput[]
    id?: StringFilter<"Syllabus"> | string
    title?: StringFilter<"Syllabus"> | string
    description?: StringNullableFilter<"Syllabus"> | string | null
    created_at?: DateTimeFilter<"Syllabus"> | Date | string
    updated_at?: DateTimeFilter<"Syllabus"> | Date | string
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    modules?: ModuleListRelationFilter
  }

  export type SyllabusOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    class?: ClassOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
  }

  export type SyllabusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyllabusWhereInput | SyllabusWhereInput[]
    OR?: SyllabusWhereInput[]
    NOT?: SyllabusWhereInput | SyllabusWhereInput[]
    title?: StringFilter<"Syllabus"> | string
    description?: StringNullableFilter<"Syllabus"> | string | null
    created_at?: DateTimeFilter<"Syllabus"> | Date | string
    updated_at?: DateTimeFilter<"Syllabus"> | Date | string
    class?: XOR<ClassNullableScalarRelationFilter, ClassWhereInput> | null
    modules?: ModuleListRelationFilter
  }, "id">

  export type SyllabusOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SyllabusCountOrderByAggregateInput
    _max?: SyllabusMaxOrderByAggregateInput
    _min?: SyllabusMinOrderByAggregateInput
  }

  export type SyllabusScalarWhereWithAggregatesInput = {
    AND?: SyllabusScalarWhereWithAggregatesInput | SyllabusScalarWhereWithAggregatesInput[]
    OR?: SyllabusScalarWhereWithAggregatesInput[]
    NOT?: SyllabusScalarWhereWithAggregatesInput | SyllabusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Syllabus"> | string
    title?: StringWithAggregatesFilter<"Syllabus"> | string
    description?: StringNullableWithAggregatesFilter<"Syllabus"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Syllabus"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Syllabus"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    syllabus_id?: StringFilter<"Module"> | string
    position?: FloatFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    created_at?: DateTimeFilter<"Module"> | Date | string
    updated_at?: DateTimeFilter<"Module"> | Date | string
    syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    topics?: TopicListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    syllabus?: SyllabusOrderByWithRelationInput
    topics?: TopicOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    syllabus_id?: StringFilter<"Module"> | string
    position?: FloatFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    created_at?: DateTimeFilter<"Module"> | Date | string
    updated_at?: DateTimeFilter<"Module"> | Date | string
    syllabus?: XOR<SyllabusScalarRelationFilter, SyllabusWhereInput>
    topics?: TopicListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    syllabus_id?: StringWithAggregatesFilter<"Module"> | string
    position?: FloatWithAggregatesFilter<"Module"> | number
    title?: StringWithAggregatesFilter<"Module"> | string
    description?: StringNullableWithAggregatesFilter<"Module"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: StringFilter<"Topic"> | string
    module_id?: StringFilter<"Topic"> | string
    position?: FloatFilter<"Topic"> | number
    title?: StringFilter<"Topic"> | string
    content?: StringNullableFilter<"Topic"> | string | null
    goal?: StringNullableFilter<"Topic"> | string | null
    created_at?: DateTimeFilter<"Topic"> | Date | string
    updated_at?: DateTimeFilter<"Topic"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    resources?: TopicResourceListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    module?: ModuleOrderByWithRelationInput
    resources?: TopicResourceOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    module_id?: StringFilter<"Topic"> | string
    position?: FloatFilter<"Topic"> | number
    title?: StringFilter<"Topic"> | string
    content?: StringNullableFilter<"Topic"> | string | null
    goal?: StringNullableFilter<"Topic"> | string | null
    created_at?: DateTimeFilter<"Topic"> | Date | string
    updated_at?: DateTimeFilter<"Topic"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    resources?: TopicResourceListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Topic"> | string
    module_id?: StringWithAggregatesFilter<"Topic"> | string
    position?: FloatWithAggregatesFilter<"Topic"> | number
    title?: StringWithAggregatesFilter<"Topic"> | string
    content?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    goal?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Topic"> | Date | string
  }

  export type ResourceWhereInput = {
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    id?: StringFilter<"Resource"> | string
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    url?: StringFilter<"Resource"> | string
    created_at?: DateTimeFilter<"Resource"> | Date | string
    updated_at?: DateTimeFilter<"Resource"> | Date | string
    topicResources?: TopicResourceListRelationFilter
  }

  export type ResourceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    topicResources?: TopicResourceOrderByRelationAggregateInput
  }

  export type ResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResourceWhereInput | ResourceWhereInput[]
    OR?: ResourceWhereInput[]
    NOT?: ResourceWhereInput | ResourceWhereInput[]
    title?: StringFilter<"Resource"> | string
    description?: StringNullableFilter<"Resource"> | string | null
    url?: StringFilter<"Resource"> | string
    created_at?: DateTimeFilter<"Resource"> | Date | string
    updated_at?: DateTimeFilter<"Resource"> | Date | string
    topicResources?: TopicResourceListRelationFilter
  }, "id">

  export type ResourceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ResourceCountOrderByAggregateInput
    _max?: ResourceMaxOrderByAggregateInput
    _min?: ResourceMinOrderByAggregateInput
  }

  export type ResourceScalarWhereWithAggregatesInput = {
    AND?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    OR?: ResourceScalarWhereWithAggregatesInput[]
    NOT?: ResourceScalarWhereWithAggregatesInput | ResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resource"> | string
    title?: StringWithAggregatesFilter<"Resource"> | string
    description?: StringNullableWithAggregatesFilter<"Resource"> | string | null
    url?: StringWithAggregatesFilter<"Resource"> | string
    created_at?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Resource"> | Date | string
  }

  export type TopicResourceWhereInput = {
    AND?: TopicResourceWhereInput | TopicResourceWhereInput[]
    OR?: TopicResourceWhereInput[]
    NOT?: TopicResourceWhereInput | TopicResourceWhereInput[]
    id?: StringFilter<"TopicResource"> | string
    topic_id?: StringFilter<"TopicResource"> | string
    resource_id?: StringNullableFilter<"TopicResource"> | string | null
    created_at?: DateTimeFilter<"TopicResource"> | Date | string
    updated_at?: DateTimeFilter<"TopicResource"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    resource?: XOR<ResourceNullableScalarRelationFilter, ResourceWhereInput> | null
  }

  export type TopicResourceOrderByWithRelationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    resource_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    topic?: TopicOrderByWithRelationInput
    resource?: ResourceOrderByWithRelationInput
  }

  export type TopicResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicResourceWhereInput | TopicResourceWhereInput[]
    OR?: TopicResourceWhereInput[]
    NOT?: TopicResourceWhereInput | TopicResourceWhereInput[]
    topic_id?: StringFilter<"TopicResource"> | string
    resource_id?: StringNullableFilter<"TopicResource"> | string | null
    created_at?: DateTimeFilter<"TopicResource"> | Date | string
    updated_at?: DateTimeFilter<"TopicResource"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
    resource?: XOR<ResourceNullableScalarRelationFilter, ResourceWhereInput> | null
  }, "id">

  export type TopicResourceOrderByWithAggregationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    resource_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TopicResourceCountOrderByAggregateInput
    _max?: TopicResourceMaxOrderByAggregateInput
    _min?: TopicResourceMinOrderByAggregateInput
  }

  export type TopicResourceScalarWhereWithAggregatesInput = {
    AND?: TopicResourceScalarWhereWithAggregatesInput | TopicResourceScalarWhereWithAggregatesInput[]
    OR?: TopicResourceScalarWhereWithAggregatesInput[]
    NOT?: TopicResourceScalarWhereWithAggregatesInput | TopicResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicResource"> | string
    topic_id?: StringWithAggregatesFilter<"TopicResource"> | string
    resource_id?: StringNullableWithAggregatesFilter<"TopicResource"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"TopicResource"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TopicResource"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    topic_id?: StringFilter<"Session"> | string
    session_start?: DateTimeFilter<"Session"> | Date | string
    session_end?: DateTimeFilter<"Session"> | Date | string
    meeting_id?: StringFilter<"Session"> | string
    meeting_password?: StringFilter<"Session"> | string
    meeting_url?: StringFilter<"Session"> | string
    meeting_recording?: StringNullableFilter<"Session"> | string | null
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    meeting_id?: SortOrder
    meeting_password?: SortOrder
    meeting_url?: SortOrder
    meeting_recording?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    topic?: TopicOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    topic_id?: StringFilter<"Session"> | string
    session_start?: DateTimeFilter<"Session"> | Date | string
    session_end?: DateTimeFilter<"Session"> | Date | string
    meeting_id?: StringFilter<"Session"> | string
    meeting_password?: StringFilter<"Session"> | string
    meeting_url?: StringFilter<"Session"> | string
    meeting_recording?: StringNullableFilter<"Session"> | string | null
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
    topic?: XOR<TopicScalarRelationFilter, TopicWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    topic_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    meeting_id?: SortOrder
    meeting_password?: SortOrder
    meeting_url?: SortOrder
    meeting_recording?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    topic_id?: StringWithAggregatesFilter<"Session"> | string
    session_start?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    session_end?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    meeting_id?: StringWithAggregatesFilter<"Session"> | string
    meeting_password?: StringWithAggregatesFilter<"Session"> | string
    meeting_url?: StringWithAggregatesFilter<"Session"> | string
    meeting_recording?: StringNullableWithAggregatesFilter<"Session"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ClassStudentWhereInput = {
    AND?: ClassStudentWhereInput | ClassStudentWhereInput[]
    OR?: ClassStudentWhereInput[]
    NOT?: ClassStudentWhereInput | ClassStudentWhereInput[]
    id?: StringFilter<"ClassStudent"> | string
    user_id?: StringFilter<"ClassStudent"> | string
    class_id?: StringFilter<"ClassStudent"> | string
    is_active?: BoolFilter<"ClassStudent"> | boolean
    created_at?: DateTimeFilter<"ClassStudent"> | Date | string
    updated_at?: DateTimeFilter<"ClassStudent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    attendance?: AttendanceListRelationFilter
  }

  export type ClassStudentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type ClassStudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassStudentWhereInput | ClassStudentWhereInput[]
    OR?: ClassStudentWhereInput[]
    NOT?: ClassStudentWhereInput | ClassStudentWhereInput[]
    user_id?: StringFilter<"ClassStudent"> | string
    class_id?: StringFilter<"ClassStudent"> | string
    is_active?: BoolFilter<"ClassStudent"> | boolean
    created_at?: DateTimeFilter<"ClassStudent"> | Date | string
    updated_at?: DateTimeFilter<"ClassStudent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    attendance?: AttendanceListRelationFilter
  }, "id">

  export type ClassStudentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassStudentCountOrderByAggregateInput
    _max?: ClassStudentMaxOrderByAggregateInput
    _min?: ClassStudentMinOrderByAggregateInput
  }

  export type ClassStudentScalarWhereWithAggregatesInput = {
    AND?: ClassStudentScalarWhereWithAggregatesInput | ClassStudentScalarWhereWithAggregatesInput[]
    OR?: ClassStudentScalarWhereWithAggregatesInput[]
    NOT?: ClassStudentScalarWhereWithAggregatesInput | ClassStudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassStudent"> | string
    user_id?: StringWithAggregatesFilter<"ClassStudent"> | string
    class_id?: StringWithAggregatesFilter<"ClassStudent"> | string
    is_active?: BoolWithAggregatesFilter<"ClassStudent"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ClassStudent"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassStudent"> | Date | string
  }

  export type ClassTeacherWhereInput = {
    AND?: ClassTeacherWhereInput | ClassTeacherWhereInput[]
    OR?: ClassTeacherWhereInput[]
    NOT?: ClassTeacherWhereInput | ClassTeacherWhereInput[]
    id?: StringFilter<"ClassTeacher"> | string
    user_id?: StringFilter<"ClassTeacher"> | string
    class_id?: StringFilter<"ClassTeacher"> | string
    is_active?: BoolFilter<"ClassTeacher"> | boolean
    created_at?: DateTimeFilter<"ClassTeacher"> | Date | string
    updated_at?: DateTimeFilter<"ClassTeacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type ClassTeacherOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type ClassTeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassTeacherWhereInput | ClassTeacherWhereInput[]
    OR?: ClassTeacherWhereInput[]
    NOT?: ClassTeacherWhereInput | ClassTeacherWhereInput[]
    user_id?: StringFilter<"ClassTeacher"> | string
    class_id?: StringFilter<"ClassTeacher"> | string
    is_active?: BoolFilter<"ClassTeacher"> | boolean
    created_at?: DateTimeFilter<"ClassTeacher"> | Date | string
    updated_at?: DateTimeFilter<"ClassTeacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type ClassTeacherOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassTeacherCountOrderByAggregateInput
    _max?: ClassTeacherMaxOrderByAggregateInput
    _min?: ClassTeacherMinOrderByAggregateInput
  }

  export type ClassTeacherScalarWhereWithAggregatesInput = {
    AND?: ClassTeacherScalarWhereWithAggregatesInput | ClassTeacherScalarWhereWithAggregatesInput[]
    OR?: ClassTeacherScalarWhereWithAggregatesInput[]
    NOT?: ClassTeacherScalarWhereWithAggregatesInput | ClassTeacherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassTeacher"> | string
    user_id?: StringWithAggregatesFilter<"ClassTeacher"> | string
    class_id?: StringWithAggregatesFilter<"ClassTeacher"> | string
    is_active?: BoolWithAggregatesFilter<"ClassTeacher"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ClassTeacher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassTeacher"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    classes?: ClassListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: UserOrderByRelationAggregateInput
    classes?: ClassOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    website?: StringNullableFilter<"Company"> | string | null
    logo?: StringNullableFilter<"Company"> | string | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_at?: DateTimeFilter<"Company"> | Date | string
    users?: UserListRelationFilter
    classes?: ClassListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    website?: StringNullableWithAggregatesFilter<"Company"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Company"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type ClassTypeWhereInput = {
    AND?: ClassTypeWhereInput | ClassTypeWhereInput[]
    OR?: ClassTypeWhereInput[]
    NOT?: ClassTypeWhereInput | ClassTypeWhereInput[]
    id?: StringFilter<"ClassType"> | string
    name?: StringFilter<"ClassType"> | string
    created_at?: DateTimeFilter<"ClassType"> | Date | string
    updated_at?: DateTimeFilter<"ClassType"> | Date | string
    classes?: ClassListRelationFilter
  }

  export type ClassTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    classes?: ClassOrderByRelationAggregateInput
  }

  export type ClassTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassTypeWhereInput | ClassTypeWhereInput[]
    OR?: ClassTypeWhereInput[]
    NOT?: ClassTypeWhereInput | ClassTypeWhereInput[]
    name?: StringFilter<"ClassType"> | string
    created_at?: DateTimeFilter<"ClassType"> | Date | string
    updated_at?: DateTimeFilter<"ClassType"> | Date | string
    classes?: ClassListRelationFilter
  }, "id">

  export type ClassTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ClassTypeCountOrderByAggregateInput
    _max?: ClassTypeMaxOrderByAggregateInput
    _min?: ClassTypeMinOrderByAggregateInput
  }

  export type ClassTypeScalarWhereWithAggregatesInput = {
    AND?: ClassTypeScalarWhereWithAggregatesInput | ClassTypeScalarWhereWithAggregatesInput[]
    OR?: ClassTypeScalarWhereWithAggregatesInput[]
    NOT?: ClassTypeScalarWhereWithAggregatesInput | ClassTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClassType"> | string
    name?: StringWithAggregatesFilter<"ClassType"> | string
    created_at?: DateTimeWithAggregatesFilter<"ClassType"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ClassType"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    class_student_id?: StringFilter<"Attendance"> | string
    description?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    updated_at?: DateTimeFilter<"Attendance"> | Date | string
    classStudent?: XOR<ClassStudentScalarRelationFilter, ClassStudentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    class_student_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    classStudent?: ClassStudentOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    class_student_id?: StringFilter<"Attendance"> | string
    description?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    updated_at?: DateTimeFilter<"Attendance"> | Date | string
    classStudent?: XOR<ClassStudentScalarRelationFilter, ClassStudentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    class_student_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    class_student_id?: StringWithAggregatesFilter<"Attendance"> | string
    description?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    created_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutClassInput
    company: CompanyCreateNestedOneWithoutClassesInput
    type: ClassTypeCreateNestedOneWithoutClassesInput
    students?: ClassStudentCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    syllabus_id: string
    company_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    students?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutClassNestedInput
    company?: CompanyUpdateOneRequiredWithoutClassesNestedInput
    type?: ClassTypeUpdateOneRequiredWithoutClassesNestedInput
    students?: ClassStudentUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    syllabus_id: string
    company_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    classStudents?: ClassStudentCreateNestedManyWithoutUserInput
    classTeachers?: ClassTeacherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    company_id?: string | null
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutUserInput
    classTeachers?: ClassTeacherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    classStudents?: ClassStudentUpdateManyWithoutUserNestedInput
    classTeachers?: ClassTeacherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudents?: ClassStudentUncheckedUpdateManyWithoutUserNestedInput
    classTeachers?: ClassTeacherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    company_id?: string | null
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyllabusCreateInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    class?: ClassCreateNestedOneWithoutSyllabusInput
    modules?: ModuleCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    class?: ClassUncheckedCreateNestedOneWithoutSyllabusInput
    modules?: ModuleUncheckedCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutSyllabusNestedInput
    modules?: ModuleUpdateManyWithoutSyllabusNestedInput
  }

  export type SyllabusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUncheckedUpdateOneWithoutSyllabusNestedInput
    modules?: ModuleUncheckedUpdateManyWithoutSyllabusNestedInput
  }

  export type SyllabusCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SyllabusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyllabusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutModulesInput
    topics?: TopicCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    syllabus_id: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutModulesNestedInput
    topics?: TopicUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    syllabus_id: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    module: ModuleCreateNestedOneWithoutTopicsInput
    resources?: TopicResourceCreateNestedManyWithoutTopicInput
    sessions?: SessionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: string
    module_id: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resources?: TopicResourceUncheckedCreateNestedManyWithoutTopicInput
    sessions?: SessionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutTopicsNestedInput
    resources?: TopicResourceUpdateManyWithoutTopicNestedInput
    sessions?: SessionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: TopicResourceUncheckedUpdateManyWithoutTopicNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: string
    module_id: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceCreateInput = {
    id?: string
    title: string
    description?: string | null
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    topicResources?: TopicResourceCreateNestedManyWithoutResourceInput
  }

  export type ResourceUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    url: string
    created_at?: Date | string
    updated_at?: Date | string
    topicResources?: TopicResourceUncheckedCreateNestedManyWithoutResourceInput
  }

  export type ResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topicResources?: TopicResourceUpdateManyWithoutResourceNestedInput
  }

  export type ResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topicResources?: TopicResourceUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type ResourceCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceCreateInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    topic: TopicCreateNestedOneWithoutResourcesInput
    resource?: ResourceCreateNestedOneWithoutTopicResourcesInput
  }

  export type TopicResourceUncheckedCreateInput = {
    id?: string
    topic_id: string
    resource_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutResourcesNestedInput
    resource?: ResourceUpdateOneWithoutTopicResourcesNestedInput
  }

  export type TopicResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceCreateManyInput = {
    id?: string
    topic_id: string
    resource_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    topic: TopicCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    topic_id: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    topic_id: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentCreateInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClassStudentsInput
    class: ClassCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentUncheckedCreateInput = {
    id?: string
    user_id: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassStudentsNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: AttendanceUncheckedUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentCreateManyInput = {
    id?: string
    user_id: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassStudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherCreateInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClassTeachersInput
    class: ClassCreateNestedOneWithoutTeachersInput
  }

  export type ClassTeacherUncheckedCreateInput = {
    id?: string
    user_id: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassTeachersNestedInput
    class?: ClassUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type ClassTeacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherCreateManyInput = {
    id?: string
    user_id: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
    classes?: ClassCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    classes?: ClassUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
    classes?: ClassUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    classes?: ClassUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTypeCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassCreateNestedManyWithoutTypeInput
  }

  export type ClassTypeUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutTypeInput
  }

  export type ClassTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutTypeNestedInput
  }

  export type ClassTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type ClassTypeCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
    classStudent: ClassStudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    class_student_id: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudent?: ClassStudentUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_student_id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    class_student_id: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_student_id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SyllabusScalarRelationFilter = {
    is?: SyllabusWhereInput
    isNot?: SyllabusWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type ClassTypeScalarRelationFilter = {
    is?: ClassTypeWhereInput
    isNot?: ClassTypeWhereInput
  }

  export type ClassStudentListRelationFilter = {
    every?: ClassStudentWhereInput
    some?: ClassStudentWhereInput
    none?: ClassStudentWhereInput
  }

  export type ClassTeacherListRelationFilter = {
    every?: ClassTeacherWhereInput
    some?: ClassTeacherWhereInput
    none?: ClassTeacherWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClassStudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassTeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    company_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    company_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    company_id?: SortOrder
    type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    is_email_verified?: SortOrder
    is_phone_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    is_email_verified?: SortOrder
    is_phone_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    role?: SortOrder
    is_email_verified?: SortOrder
    is_phone_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ClassNullableScalarRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SyllabusCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SyllabusMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SyllabusMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TopicListRelationFilter = {
    every?: TopicWhereInput
    some?: TopicWhereInput
    none?: TopicWhereInput
  }

  export type TopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    syllabus_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type TopicResourceListRelationFilter = {
    every?: TopicResourceWhereInput
    some?: TopicResourceWhereInput
    none?: TopicResourceWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TopicResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    content?: SortOrder
    goal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    content?: SortOrder
    goal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    module_id?: SortOrder
    position?: SortOrder
    title?: SortOrder
    content?: SortOrder
    goal?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type ResourceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ResourceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicScalarRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type ResourceNullableScalarRelationFilter = {
    is?: ResourceWhereInput | null
    isNot?: ResourceWhereInput | null
  }

  export type TopicResourceCountOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TopicResourceMinOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    resource_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    meeting_id?: SortOrder
    meeting_password?: SortOrder
    meeting_url?: SortOrder
    meeting_recording?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    meeting_id?: SortOrder
    meeting_password?: SortOrder
    meeting_url?: SortOrder
    meeting_recording?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    topic_id?: SortOrder
    session_start?: SortOrder
    session_end?: SortOrder
    meeting_id?: SortOrder
    meeting_password?: SortOrder
    meeting_url?: SortOrder
    meeting_recording?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassStudentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassStudentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassStudentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTeacherCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTeacherMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    class_id?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    website?: SortOrder
    logo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ClassTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type ClassStudentScalarRelationFilter = {
    is?: ClassStudentWhereInput
    isNot?: ClassStudentWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    class_student_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    class_student_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    class_student_id?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type SyllabusCreateNestedOneWithoutClassInput = {
    create?: XOR<SyllabusCreateWithoutClassInput, SyllabusUncheckedCreateWithoutClassInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutClassInput
    connect?: SyllabusWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutClassesInput = {
    create?: XOR<CompanyCreateWithoutClassesInput, CompanyUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClassesInput
    connect?: CompanyWhereUniqueInput
  }

  export type ClassTypeCreateNestedOneWithoutClassesInput = {
    create?: XOR<ClassTypeCreateWithoutClassesInput, ClassTypeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassTypeCreateOrConnectWithoutClassesInput
    connect?: ClassTypeWhereUniqueInput
  }

  export type ClassStudentCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type ClassTeacherCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput> | ClassTeacherCreateWithoutClassInput[] | ClassTeacherUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutClassInput | ClassTeacherCreateOrConnectWithoutClassInput[]
    createMany?: ClassTeacherCreateManyClassInputEnvelope
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
  }

  export type ClassStudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type ClassTeacherUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput> | ClassTeacherCreateWithoutClassInput[] | ClassTeacherUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutClassInput | ClassTeacherCreateOrConnectWithoutClassInput[]
    createMany?: ClassTeacherCreateManyClassInputEnvelope
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SyllabusUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<SyllabusCreateWithoutClassInput, SyllabusUncheckedCreateWithoutClassInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutClassInput
    upsert?: SyllabusUpsertWithoutClassInput
    connect?: SyllabusWhereUniqueInput
    update?: XOR<XOR<SyllabusUpdateToOneWithWhereWithoutClassInput, SyllabusUpdateWithoutClassInput>, SyllabusUncheckedUpdateWithoutClassInput>
  }

  export type CompanyUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<CompanyCreateWithoutClassesInput, CompanyUncheckedCreateWithoutClassesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutClassesInput
    upsert?: CompanyUpsertWithoutClassesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutClassesInput, CompanyUpdateWithoutClassesInput>, CompanyUncheckedUpdateWithoutClassesInput>
  }

  export type ClassTypeUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<ClassTypeCreateWithoutClassesInput, ClassTypeUncheckedCreateWithoutClassesInput>
    connectOrCreate?: ClassTypeCreateOrConnectWithoutClassesInput
    upsert?: ClassTypeUpsertWithoutClassesInput
    connect?: ClassTypeWhereUniqueInput
    update?: XOR<XOR<ClassTypeUpdateToOneWithWhereWithoutClassesInput, ClassTypeUpdateWithoutClassesInput>, ClassTypeUncheckedUpdateWithoutClassesInput>
  }

  export type ClassStudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutClassInput | ClassStudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutClassInput | ClassStudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutClassInput | ClassStudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type ClassTeacherUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput> | ClassTeacherCreateWithoutClassInput[] | ClassTeacherUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutClassInput | ClassTeacherCreateOrConnectWithoutClassInput[]
    upsert?: ClassTeacherUpsertWithWhereUniqueWithoutClassInput | ClassTeacherUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassTeacherCreateManyClassInputEnvelope
    set?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    disconnect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    delete?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    update?: ClassTeacherUpdateWithWhereUniqueWithoutClassInput | ClassTeacherUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassTeacherUpdateManyWithWhereWithoutClassInput | ClassTeacherUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
  }

  export type ClassStudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput> | ClassStudentCreateWithoutClassInput[] | ClassStudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutClassInput | ClassStudentCreateOrConnectWithoutClassInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutClassInput | ClassStudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassStudentCreateManyClassInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutClassInput | ClassStudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutClassInput | ClassStudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type ClassTeacherUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput> | ClassTeacherCreateWithoutClassInput[] | ClassTeacherUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutClassInput | ClassTeacherCreateOrConnectWithoutClassInput[]
    upsert?: ClassTeacherUpsertWithWhereUniqueWithoutClassInput | ClassTeacherUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassTeacherCreateManyClassInputEnvelope
    set?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    disconnect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    delete?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    update?: ClassTeacherUpdateWithWhereUniqueWithoutClassInput | ClassTeacherUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassTeacherUpdateManyWithWhereWithoutClassInput | ClassTeacherUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type ClassStudentCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput> | ClassStudentCreateWithoutUserInput[] | ClassStudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutUserInput | ClassStudentCreateOrConnectWithoutUserInput[]
    createMany?: ClassStudentCreateManyUserInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type ClassTeacherCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput> | ClassTeacherCreateWithoutUserInput[] | ClassTeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutUserInput | ClassTeacherCreateOrConnectWithoutUserInput[]
    createMany?: ClassTeacherCreateManyUserInputEnvelope
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
  }

  export type ClassStudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput> | ClassStudentCreateWithoutUserInput[] | ClassStudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutUserInput | ClassStudentCreateOrConnectWithoutUserInput[]
    createMany?: ClassStudentCreateManyUserInputEnvelope
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
  }

  export type ClassTeacherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput> | ClassTeacherCreateWithoutUserInput[] | ClassTeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutUserInput | ClassTeacherCreateOrConnectWithoutUserInput[]
    createMany?: ClassTeacherCreateManyUserInputEnvelope
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type ClassStudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput> | ClassStudentCreateWithoutUserInput[] | ClassStudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutUserInput | ClassStudentCreateOrConnectWithoutUserInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutUserInput | ClassStudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassStudentCreateManyUserInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutUserInput | ClassStudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutUserInput | ClassStudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type ClassTeacherUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput> | ClassTeacherCreateWithoutUserInput[] | ClassTeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutUserInput | ClassTeacherCreateOrConnectWithoutUserInput[]
    upsert?: ClassTeacherUpsertWithWhereUniqueWithoutUserInput | ClassTeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassTeacherCreateManyUserInputEnvelope
    set?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    disconnect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    delete?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    update?: ClassTeacherUpdateWithWhereUniqueWithoutUserInput | ClassTeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassTeacherUpdateManyWithWhereWithoutUserInput | ClassTeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
  }

  export type ClassStudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput> | ClassStudentCreateWithoutUserInput[] | ClassStudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassStudentCreateOrConnectWithoutUserInput | ClassStudentCreateOrConnectWithoutUserInput[]
    upsert?: ClassStudentUpsertWithWhereUniqueWithoutUserInput | ClassStudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassStudentCreateManyUserInputEnvelope
    set?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    disconnect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    delete?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    connect?: ClassStudentWhereUniqueInput | ClassStudentWhereUniqueInput[]
    update?: ClassStudentUpdateWithWhereUniqueWithoutUserInput | ClassStudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassStudentUpdateManyWithWhereWithoutUserInput | ClassStudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
  }

  export type ClassTeacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput> | ClassTeacherCreateWithoutUserInput[] | ClassTeacherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassTeacherCreateOrConnectWithoutUserInput | ClassTeacherCreateOrConnectWithoutUserInput[]
    upsert?: ClassTeacherUpsertWithWhereUniqueWithoutUserInput | ClassTeacherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassTeacherCreateManyUserInputEnvelope
    set?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    disconnect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    delete?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    connect?: ClassTeacherWhereUniqueInput | ClassTeacherWhereUniqueInput[]
    update?: ClassTeacherUpdateWithWhereUniqueWithoutUserInput | ClassTeacherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassTeacherUpdateManyWithWhereWithoutUserInput | ClassTeacherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutSyllabusInput = {
    create?: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSyllabusInput
    connect?: ClassWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutSyllabusInput = {
    create?: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput> | ModuleCreateWithoutSyllabusInput[] | ModuleUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSyllabusInput | ModuleCreateOrConnectWithoutSyllabusInput[]
    createMany?: ModuleCreateManySyllabusInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedOneWithoutSyllabusInput = {
    create?: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSyllabusInput
    connect?: ClassWhereUniqueInput
  }

  export type ModuleUncheckedCreateNestedManyWithoutSyllabusInput = {
    create?: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput> | ModuleCreateWithoutSyllabusInput[] | ModuleUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSyllabusInput | ModuleCreateOrConnectWithoutSyllabusInput[]
    createMany?: ModuleCreateManySyllabusInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type ClassUpdateOneWithoutSyllabusNestedInput = {
    create?: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSyllabusInput
    upsert?: ClassUpsertWithoutSyllabusInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSyllabusInput, ClassUpdateWithoutSyllabusInput>, ClassUncheckedUpdateWithoutSyllabusInput>
  }

  export type ModuleUpdateManyWithoutSyllabusNestedInput = {
    create?: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput> | ModuleCreateWithoutSyllabusInput[] | ModuleUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSyllabusInput | ModuleCreateOrConnectWithoutSyllabusInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutSyllabusInput | ModuleUpsertWithWhereUniqueWithoutSyllabusInput[]
    createMany?: ModuleCreateManySyllabusInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutSyllabusInput | ModuleUpdateWithWhereUniqueWithoutSyllabusInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutSyllabusInput | ModuleUpdateManyWithWhereWithoutSyllabusInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type ClassUncheckedUpdateOneWithoutSyllabusNestedInput = {
    create?: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSyllabusInput
    upsert?: ClassUpsertWithoutSyllabusInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSyllabusInput, ClassUpdateWithoutSyllabusInput>, ClassUncheckedUpdateWithoutSyllabusInput>
  }

  export type ModuleUncheckedUpdateManyWithoutSyllabusNestedInput = {
    create?: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput> | ModuleCreateWithoutSyllabusInput[] | ModuleUncheckedCreateWithoutSyllabusInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutSyllabusInput | ModuleCreateOrConnectWithoutSyllabusInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutSyllabusInput | ModuleUpsertWithWhereUniqueWithoutSyllabusInput[]
    createMany?: ModuleCreateManySyllabusInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutSyllabusInput | ModuleUpdateWithWhereUniqueWithoutSyllabusInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutSyllabusInput | ModuleUpdateManyWithWhereWithoutSyllabusInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type SyllabusCreateNestedOneWithoutModulesInput = {
    create?: XOR<SyllabusCreateWithoutModulesInput, SyllabusUncheckedCreateWithoutModulesInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutModulesInput
    connect?: SyllabusWhereUniqueInput
  }

  export type TopicCreateNestedManyWithoutModuleInput = {
    create?: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput> | TopicCreateWithoutModuleInput[] | TopicUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutModuleInput | TopicCreateOrConnectWithoutModuleInput[]
    createMany?: TopicCreateManyModuleInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type TopicUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput> | TopicCreateWithoutModuleInput[] | TopicUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutModuleInput | TopicCreateOrConnectWithoutModuleInput[]
    createMany?: TopicCreateManyModuleInputEnvelope
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SyllabusUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<SyllabusCreateWithoutModulesInput, SyllabusUncheckedCreateWithoutModulesInput>
    connectOrCreate?: SyllabusCreateOrConnectWithoutModulesInput
    upsert?: SyllabusUpsertWithoutModulesInput
    connect?: SyllabusWhereUniqueInput
    update?: XOR<XOR<SyllabusUpdateToOneWithWhereWithoutModulesInput, SyllabusUpdateWithoutModulesInput>, SyllabusUncheckedUpdateWithoutModulesInput>
  }

  export type TopicUpdateManyWithoutModuleNestedInput = {
    create?: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput> | TopicCreateWithoutModuleInput[] | TopicUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutModuleInput | TopicCreateOrConnectWithoutModuleInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutModuleInput | TopicUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: TopicCreateManyModuleInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutModuleInput | TopicUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutModuleInput | TopicUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type TopicUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput> | TopicCreateWithoutModuleInput[] | TopicUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TopicCreateOrConnectWithoutModuleInput | TopicCreateOrConnectWithoutModuleInput[]
    upsert?: TopicUpsertWithWhereUniqueWithoutModuleInput | TopicUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: TopicCreateManyModuleInputEnvelope
    set?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    disconnect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    delete?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    connect?: TopicWhereUniqueInput | TopicWhereUniqueInput[]
    update?: TopicUpdateWithWhereUniqueWithoutModuleInput | TopicUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: TopicUpdateManyWithWhereWithoutModuleInput | TopicUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: TopicScalarWhereInput | TopicScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutTopicsInput = {
    create?: XOR<ModuleCreateWithoutTopicsInput, ModuleUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTopicsInput
    connect?: ModuleWhereUniqueInput
  }

  export type TopicResourceCreateNestedManyWithoutTopicInput = {
    create?: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput> | TopicResourceCreateWithoutTopicInput[] | TopicResourceUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutTopicInput | TopicResourceCreateOrConnectWithoutTopicInput[]
    createMany?: TopicResourceCreateManyTopicInputEnvelope
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutTopicInput = {
    create?: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput> | SessionCreateWithoutTopicInput[] | SessionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopicInput | SessionCreateOrConnectWithoutTopicInput[]
    createMany?: SessionCreateManyTopicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TopicResourceUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput> | TopicResourceCreateWithoutTopicInput[] | TopicResourceUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutTopicInput | TopicResourceCreateOrConnectWithoutTopicInput[]
    createMany?: TopicResourceCreateManyTopicInputEnvelope
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput> | SessionCreateWithoutTopicInput[] | SessionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopicInput | SessionCreateOrConnectWithoutTopicInput[]
    createMany?: SessionCreateManyTopicInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ModuleUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<ModuleCreateWithoutTopicsInput, ModuleUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTopicsInput
    upsert?: ModuleUpsertWithoutTopicsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutTopicsInput, ModuleUpdateWithoutTopicsInput>, ModuleUncheckedUpdateWithoutTopicsInput>
  }

  export type TopicResourceUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput> | TopicResourceCreateWithoutTopicInput[] | TopicResourceUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutTopicInput | TopicResourceCreateOrConnectWithoutTopicInput[]
    upsert?: TopicResourceUpsertWithWhereUniqueWithoutTopicInput | TopicResourceUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TopicResourceCreateManyTopicInputEnvelope
    set?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    disconnect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    delete?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    update?: TopicResourceUpdateWithWhereUniqueWithoutTopicInput | TopicResourceUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TopicResourceUpdateManyWithWhereWithoutTopicInput | TopicResourceUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput> | SessionCreateWithoutTopicInput[] | SessionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopicInput | SessionCreateOrConnectWithoutTopicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTopicInput | SessionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SessionCreateManyTopicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTopicInput | SessionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTopicInput | SessionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TopicResourceUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput> | TopicResourceCreateWithoutTopicInput[] | TopicResourceUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutTopicInput | TopicResourceCreateOrConnectWithoutTopicInput[]
    upsert?: TopicResourceUpsertWithWhereUniqueWithoutTopicInput | TopicResourceUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: TopicResourceCreateManyTopicInputEnvelope
    set?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    disconnect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    delete?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    update?: TopicResourceUpdateWithWhereUniqueWithoutTopicInput | TopicResourceUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: TopicResourceUpdateManyWithWhereWithoutTopicInput | TopicResourceUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput> | SessionCreateWithoutTopicInput[] | SessionUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopicInput | SessionCreateOrConnectWithoutTopicInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTopicInput | SessionUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: SessionCreateManyTopicInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTopicInput | SessionUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTopicInput | SessionUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TopicResourceCreateNestedManyWithoutResourceInput = {
    create?: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput> | TopicResourceCreateWithoutResourceInput[] | TopicResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutResourceInput | TopicResourceCreateOrConnectWithoutResourceInput[]
    createMany?: TopicResourceCreateManyResourceInputEnvelope
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
  }

  export type TopicResourceUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput> | TopicResourceCreateWithoutResourceInput[] | TopicResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutResourceInput | TopicResourceCreateOrConnectWithoutResourceInput[]
    createMany?: TopicResourceCreateManyResourceInputEnvelope
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
  }

  export type TopicResourceUpdateManyWithoutResourceNestedInput = {
    create?: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput> | TopicResourceCreateWithoutResourceInput[] | TopicResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutResourceInput | TopicResourceCreateOrConnectWithoutResourceInput[]
    upsert?: TopicResourceUpsertWithWhereUniqueWithoutResourceInput | TopicResourceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: TopicResourceCreateManyResourceInputEnvelope
    set?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    disconnect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    delete?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    update?: TopicResourceUpdateWithWhereUniqueWithoutResourceInput | TopicResourceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: TopicResourceUpdateManyWithWhereWithoutResourceInput | TopicResourceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
  }

  export type TopicResourceUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput> | TopicResourceCreateWithoutResourceInput[] | TopicResourceUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: TopicResourceCreateOrConnectWithoutResourceInput | TopicResourceCreateOrConnectWithoutResourceInput[]
    upsert?: TopicResourceUpsertWithWhereUniqueWithoutResourceInput | TopicResourceUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: TopicResourceCreateManyResourceInputEnvelope
    set?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    disconnect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    delete?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    connect?: TopicResourceWhereUniqueInput | TopicResourceWhereUniqueInput[]
    update?: TopicResourceUpdateWithWhereUniqueWithoutResourceInput | TopicResourceUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: TopicResourceUpdateManyWithWhereWithoutResourceInput | TopicResourceUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
  }

  export type TopicCreateNestedOneWithoutResourcesInput = {
    create?: XOR<TopicCreateWithoutResourcesInput, TopicUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutResourcesInput
    connect?: TopicWhereUniqueInput
  }

  export type ResourceCreateNestedOneWithoutTopicResourcesInput = {
    create?: XOR<ResourceCreateWithoutTopicResourcesInput, ResourceUncheckedCreateWithoutTopicResourcesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTopicResourcesInput
    connect?: ResourceWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<TopicCreateWithoutResourcesInput, TopicUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: TopicCreateOrConnectWithoutResourcesInput
    upsert?: TopicUpsertWithoutResourcesInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutResourcesInput, TopicUpdateWithoutResourcesInput>, TopicUncheckedUpdateWithoutResourcesInput>
  }

  export type ResourceUpdateOneWithoutTopicResourcesNestedInput = {
    create?: XOR<ResourceCreateWithoutTopicResourcesInput, ResourceUncheckedCreateWithoutTopicResourcesInput>
    connectOrCreate?: ResourceCreateOrConnectWithoutTopicResourcesInput
    upsert?: ResourceUpsertWithoutTopicResourcesInput
    disconnect?: ResourceWhereInput | boolean
    delete?: ResourceWhereInput | boolean
    connect?: ResourceWhereUniqueInput
    update?: XOR<XOR<ResourceUpdateToOneWithWhereWithoutTopicResourcesInput, ResourceUpdateWithoutTopicResourcesInput>, ResourceUncheckedUpdateWithoutTopicResourcesInput>
  }

  export type TopicCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TopicCreateWithoutSessionsInput, TopicUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSessionsInput
    connect?: TopicWhereUniqueInput
  }

  export type TopicUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<TopicCreateWithoutSessionsInput, TopicUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TopicCreateOrConnectWithoutSessionsInput
    upsert?: TopicUpsertWithoutSessionsInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutSessionsInput, TopicUpdateWithoutSessionsInput>, TopicUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutClassStudentsInput = {
    create?: XOR<UserCreateWithoutClassStudentsInput, UserUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutClassStudentInput = {
    create?: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput> | AttendanceCreateWithoutClassStudentInput[] | AttendanceUncheckedCreateWithoutClassStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassStudentInput | AttendanceCreateOrConnectWithoutClassStudentInput[]
    createMany?: AttendanceCreateManyClassStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassStudentInput = {
    create?: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput> | AttendanceCreateWithoutClassStudentInput[] | AttendanceUncheckedCreateWithoutClassStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassStudentInput | AttendanceCreateOrConnectWithoutClassStudentInput[]
    createMany?: AttendanceCreateManyClassStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutClassStudentsNestedInput = {
    create?: XOR<UserCreateWithoutClassStudentsInput, UserUncheckedCreateWithoutClassStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassStudentsInput
    upsert?: UserUpsertWithoutClassStudentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassStudentsInput, UserUpdateWithoutClassStudentsInput>, UserUncheckedUpdateWithoutClassStudentsInput>
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceUpdateManyWithoutClassStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput> | AttendanceCreateWithoutClassStudentInput[] | AttendanceUncheckedCreateWithoutClassStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassStudentInput | AttendanceCreateOrConnectWithoutClassStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassStudentInput | AttendanceUpsertWithWhereUniqueWithoutClassStudentInput[]
    createMany?: AttendanceCreateManyClassStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassStudentInput | AttendanceUpdateWithWhereUniqueWithoutClassStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassStudentInput | AttendanceUpdateManyWithWhereWithoutClassStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput> | AttendanceCreateWithoutClassStudentInput[] | AttendanceUncheckedCreateWithoutClassStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassStudentInput | AttendanceCreateOrConnectWithoutClassStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassStudentInput | AttendanceUpsertWithWhereUniqueWithoutClassStudentInput[]
    createMany?: AttendanceCreateManyClassStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassStudentInput | AttendanceUpdateWithWhereUniqueWithoutClassStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassStudentInput | AttendanceUpdateManyWithWhereWithoutClassStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClassTeachersInput = {
    create?: XOR<UserCreateWithoutClassTeachersInput, UserUncheckedCreateWithoutClassTeachersInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassTeachersInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutTeachersInput = {
    create?: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachersInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutClassTeachersNestedInput = {
    create?: XOR<UserCreateWithoutClassTeachersInput, UserUncheckedCreateWithoutClassTeachersInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassTeachersInput
    upsert?: UserUpsertWithoutClassTeachersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassTeachersInput, UserUpdateWithoutClassTeachersInput>, UserUncheckedUpdateWithoutClassTeachersInput>
  }

  export type ClassUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeachersInput
    upsert?: ClassUpsertWithoutTeachersInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeachersInput, ClassUpdateWithoutTeachersInput>, ClassUncheckedUpdateWithoutTeachersInput>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput> | ClassCreateWithoutCompanyInput[] | ClassUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCompanyInput | ClassCreateOrConnectWithoutCompanyInput[]
    createMany?: ClassCreateManyCompanyInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput> | ClassCreateWithoutCompanyInput[] | ClassUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCompanyInput | ClassCreateOrConnectWithoutCompanyInput[]
    createMany?: ClassCreateManyCompanyInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput> | ClassCreateWithoutCompanyInput[] | ClassUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCompanyInput | ClassCreateOrConnectWithoutCompanyInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCompanyInput | ClassUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClassCreateManyCompanyInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCompanyInput | ClassUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCompanyInput | ClassUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput> | ClassCreateWithoutCompanyInput[] | ClassUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutCompanyInput | ClassCreateOrConnectWithoutCompanyInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutCompanyInput | ClassUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ClassCreateManyCompanyInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutCompanyInput | ClassUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutCompanyInput | ClassUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassCreateNestedManyWithoutTypeInput = {
    create?: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput> | ClassCreateWithoutTypeInput[] | ClassUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTypeInput | ClassCreateOrConnectWithoutTypeInput[]
    createMany?: ClassCreateManyTypeInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput> | ClassCreateWithoutTypeInput[] | ClassUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTypeInput | ClassCreateOrConnectWithoutTypeInput[]
    createMany?: ClassCreateManyTypeInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput> | ClassCreateWithoutTypeInput[] | ClassUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTypeInput | ClassCreateOrConnectWithoutTypeInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTypeInput | ClassUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ClassCreateManyTypeInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTypeInput | ClassUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTypeInput | ClassUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput> | ClassCreateWithoutTypeInput[] | ClassUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTypeInput | ClassCreateOrConnectWithoutTypeInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTypeInput | ClassUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: ClassCreateManyTypeInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTypeInput | ClassUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTypeInput | ClassUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassStudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<ClassStudentCreateWithoutAttendanceInput, ClassStudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassStudentCreateOrConnectWithoutAttendanceInput
    connect?: ClassStudentWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type ClassStudentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<ClassStudentCreateWithoutAttendanceInput, ClassStudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassStudentCreateOrConnectWithoutAttendanceInput
    upsert?: ClassStudentUpsertWithoutAttendanceInput
    connect?: ClassStudentWhereUniqueInput
    update?: XOR<XOR<ClassStudentUpdateToOneWithWhereWithoutAttendanceInput, ClassStudentUpdateWithoutAttendanceInput>, ClassStudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type SyllabusCreateWithoutClassInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    modules?: ModuleCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusUncheckedCreateWithoutClassInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutSyllabusInput
  }

  export type SyllabusCreateOrConnectWithoutClassInput = {
    where: SyllabusWhereUniqueInput
    create: XOR<SyllabusCreateWithoutClassInput, SyllabusUncheckedCreateWithoutClassInput>
  }

  export type CompanyCreateWithoutClassesInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutClassesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutClassesInput, CompanyUncheckedCreateWithoutClassesInput>
  }

  export type ClassTypeCreateWithoutClassesInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTypeUncheckedCreateWithoutClassesInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTypeCreateOrConnectWithoutClassesInput = {
    where: ClassTypeWhereUniqueInput
    create: XOR<ClassTypeCreateWithoutClassesInput, ClassTypeUncheckedCreateWithoutClassesInput>
  }

  export type ClassStudentCreateWithoutClassInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClassStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentUncheckedCreateWithoutClassInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentCreateOrConnectWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    create: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput>
  }

  export type ClassStudentCreateManyClassInputEnvelope = {
    data: ClassStudentCreateManyClassInput | ClassStudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type ClassTeacherCreateWithoutClassInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClassTeachersInput
  }

  export type ClassTeacherUncheckedCreateWithoutClassInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherCreateOrConnectWithoutClassInput = {
    where: ClassTeacherWhereUniqueInput
    create: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput>
  }

  export type ClassTeacherCreateManyClassInputEnvelope = {
    data: ClassTeacherCreateManyClassInput | ClassTeacherCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SyllabusUpsertWithoutClassInput = {
    update: XOR<SyllabusUpdateWithoutClassInput, SyllabusUncheckedUpdateWithoutClassInput>
    create: XOR<SyllabusCreateWithoutClassInput, SyllabusUncheckedCreateWithoutClassInput>
    where?: SyllabusWhereInput
  }

  export type SyllabusUpdateToOneWithWhereWithoutClassInput = {
    where?: SyllabusWhereInput
    data: XOR<SyllabusUpdateWithoutClassInput, SyllabusUncheckedUpdateWithoutClassInput>
  }

  export type SyllabusUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutSyllabusNestedInput
  }

  export type SyllabusUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutSyllabusNestedInput
  }

  export type CompanyUpsertWithoutClassesInput = {
    update: XOR<CompanyUpdateWithoutClassesInput, CompanyUncheckedUpdateWithoutClassesInput>
    create: XOR<CompanyCreateWithoutClassesInput, CompanyUncheckedCreateWithoutClassesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutClassesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutClassesInput, CompanyUncheckedUpdateWithoutClassesInput>
  }

  export type CompanyUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ClassTypeUpsertWithoutClassesInput = {
    update: XOR<ClassTypeUpdateWithoutClassesInput, ClassTypeUncheckedUpdateWithoutClassesInput>
    create: XOR<ClassTypeCreateWithoutClassesInput, ClassTypeUncheckedCreateWithoutClassesInput>
    where?: ClassTypeWhereInput
  }

  export type ClassTypeUpdateToOneWithWhereWithoutClassesInput = {
    where?: ClassTypeWhereInput
    data: XOR<ClassTypeUpdateWithoutClassesInput, ClassTypeUncheckedUpdateWithoutClassesInput>
  }

  export type ClassTypeUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTypeUncheckedUpdateWithoutClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentUpsertWithWhereUniqueWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    update: XOR<ClassStudentUpdateWithoutClassInput, ClassStudentUncheckedUpdateWithoutClassInput>
    create: XOR<ClassStudentCreateWithoutClassInput, ClassStudentUncheckedCreateWithoutClassInput>
  }

  export type ClassStudentUpdateWithWhereUniqueWithoutClassInput = {
    where: ClassStudentWhereUniqueInput
    data: XOR<ClassStudentUpdateWithoutClassInput, ClassStudentUncheckedUpdateWithoutClassInput>
  }

  export type ClassStudentUpdateManyWithWhereWithoutClassInput = {
    where: ClassStudentScalarWhereInput
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassStudentScalarWhereInput = {
    AND?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
    OR?: ClassStudentScalarWhereInput[]
    NOT?: ClassStudentScalarWhereInput | ClassStudentScalarWhereInput[]
    id?: StringFilter<"ClassStudent"> | string
    user_id?: StringFilter<"ClassStudent"> | string
    class_id?: StringFilter<"ClassStudent"> | string
    is_active?: BoolFilter<"ClassStudent"> | boolean
    created_at?: DateTimeFilter<"ClassStudent"> | Date | string
    updated_at?: DateTimeFilter<"ClassStudent"> | Date | string
  }

  export type ClassTeacherUpsertWithWhereUniqueWithoutClassInput = {
    where: ClassTeacherWhereUniqueInput
    update: XOR<ClassTeacherUpdateWithoutClassInput, ClassTeacherUncheckedUpdateWithoutClassInput>
    create: XOR<ClassTeacherCreateWithoutClassInput, ClassTeacherUncheckedCreateWithoutClassInput>
  }

  export type ClassTeacherUpdateWithWhereUniqueWithoutClassInput = {
    where: ClassTeacherWhereUniqueInput
    data: XOR<ClassTeacherUpdateWithoutClassInput, ClassTeacherUncheckedUpdateWithoutClassInput>
  }

  export type ClassTeacherUpdateManyWithWhereWithoutClassInput = {
    where: ClassTeacherScalarWhereInput
    data: XOR<ClassTeacherUpdateManyMutationInput, ClassTeacherUncheckedUpdateManyWithoutClassInput>
  }

  export type ClassTeacherScalarWhereInput = {
    AND?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
    OR?: ClassTeacherScalarWhereInput[]
    NOT?: ClassTeacherScalarWhereInput | ClassTeacherScalarWhereInput[]
    id?: StringFilter<"ClassTeacher"> | string
    user_id?: StringFilter<"ClassTeacher"> | string
    class_id?: StringFilter<"ClassTeacher"> | string
    is_active?: BoolFilter<"ClassTeacher"> | boolean
    created_at?: DateTimeFilter<"ClassTeacher"> | Date | string
    updated_at?: DateTimeFilter<"ClassTeacher"> | Date | string
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    website?: string | null
    logo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    classes?: ClassUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type ClassStudentCreateWithoutUserInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    class: ClassCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentUncheckedCreateWithoutUserInput = {
    id?: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    attendance?: AttendanceUncheckedCreateNestedManyWithoutClassStudentInput
  }

  export type ClassStudentCreateOrConnectWithoutUserInput = {
    where: ClassStudentWhereUniqueInput
    create: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput>
  }

  export type ClassStudentCreateManyUserInputEnvelope = {
    data: ClassStudentCreateManyUserInput | ClassStudentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassTeacherCreateWithoutUserInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    class: ClassCreateNestedOneWithoutTeachersInput
  }

  export type ClassTeacherUncheckedCreateWithoutUserInput = {
    id?: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherCreateOrConnectWithoutUserInput = {
    where: ClassTeacherWhereUniqueInput
    create: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput>
  }

  export type ClassTeacherCreateManyUserInputEnvelope = {
    data: ClassTeacherCreateManyUserInput | ClassTeacherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classes?: ClassUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type ClassStudentUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassStudentWhereUniqueInput
    update: XOR<ClassStudentUpdateWithoutUserInput, ClassStudentUncheckedUpdateWithoutUserInput>
    create: XOR<ClassStudentCreateWithoutUserInput, ClassStudentUncheckedCreateWithoutUserInput>
  }

  export type ClassStudentUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassStudentWhereUniqueInput
    data: XOR<ClassStudentUpdateWithoutUserInput, ClassStudentUncheckedUpdateWithoutUserInput>
  }

  export type ClassStudentUpdateManyWithWhereWithoutUserInput = {
    where: ClassStudentScalarWhereInput
    data: XOR<ClassStudentUpdateManyMutationInput, ClassStudentUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassTeacherUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassTeacherWhereUniqueInput
    update: XOR<ClassTeacherUpdateWithoutUserInput, ClassTeacherUncheckedUpdateWithoutUserInput>
    create: XOR<ClassTeacherCreateWithoutUserInput, ClassTeacherUncheckedCreateWithoutUserInput>
  }

  export type ClassTeacherUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassTeacherWhereUniqueInput
    data: XOR<ClassTeacherUpdateWithoutUserInput, ClassTeacherUncheckedUpdateWithoutUserInput>
  }

  export type ClassTeacherUpdateManyWithWhereWithoutUserInput = {
    where: ClassTeacherScalarWhereInput
    data: XOR<ClassTeacherUpdateManyMutationInput, ClassTeacherUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassCreateWithoutSyllabusInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company: CompanyCreateNestedOneWithoutClassesInput
    type: ClassTypeCreateNestedOneWithoutClassesInput
    students?: ClassStudentCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSyllabusInput = {
    id?: string
    company_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    students?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSyllabusInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
  }

  export type ModuleCreateWithoutSyllabusInput = {
    id?: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    topics?: TopicCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutSyllabusInput = {
    id?: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    topics?: TopicUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutSyllabusInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput>
  }

  export type ModuleCreateManySyllabusInputEnvelope = {
    data: ModuleCreateManySyllabusInput | ModuleCreateManySyllabusInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutSyllabusInput = {
    update: XOR<ClassUpdateWithoutSyllabusInput, ClassUncheckedUpdateWithoutSyllabusInput>
    create: XOR<ClassCreateWithoutSyllabusInput, ClassUncheckedCreateWithoutSyllabusInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSyllabusInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSyllabusInput, ClassUncheckedUpdateWithoutSyllabusInput>
  }

  export type ClassUpdateWithoutSyllabusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneRequiredWithoutClassesNestedInput
    type?: ClassTypeUpdateOneRequiredWithoutClassesNestedInput
    students?: ClassStudentUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSyllabusInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutSyllabusInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutSyllabusInput, ModuleUncheckedUpdateWithoutSyllabusInput>
    create: XOR<ModuleCreateWithoutSyllabusInput, ModuleUncheckedCreateWithoutSyllabusInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutSyllabusInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutSyllabusInput, ModuleUncheckedUpdateWithoutSyllabusInput>
  }

  export type ModuleUpdateManyWithWhereWithoutSyllabusInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutSyllabusInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    syllabus_id?: StringFilter<"Module"> | string
    position?: FloatFilter<"Module"> | number
    title?: StringFilter<"Module"> | string
    description?: StringNullableFilter<"Module"> | string | null
    created_at?: DateTimeFilter<"Module"> | Date | string
    updated_at?: DateTimeFilter<"Module"> | Date | string
  }

  export type SyllabusCreateWithoutModulesInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    class?: ClassCreateNestedOneWithoutSyllabusInput
  }

  export type SyllabusUncheckedCreateWithoutModulesInput = {
    id?: string
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    class?: ClassUncheckedCreateNestedOneWithoutSyllabusInput
  }

  export type SyllabusCreateOrConnectWithoutModulesInput = {
    where: SyllabusWhereUniqueInput
    create: XOR<SyllabusCreateWithoutModulesInput, SyllabusUncheckedCreateWithoutModulesInput>
  }

  export type TopicCreateWithoutModuleInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resources?: TopicResourceCreateNestedManyWithoutTopicInput
    sessions?: SessionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutModuleInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resources?: TopicResourceUncheckedCreateNestedManyWithoutTopicInput
    sessions?: SessionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutModuleInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput>
  }

  export type TopicCreateManyModuleInputEnvelope = {
    data: TopicCreateManyModuleInput | TopicCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type SyllabusUpsertWithoutModulesInput = {
    update: XOR<SyllabusUpdateWithoutModulesInput, SyllabusUncheckedUpdateWithoutModulesInput>
    create: XOR<SyllabusCreateWithoutModulesInput, SyllabusUncheckedCreateWithoutModulesInput>
    where?: SyllabusWhereInput
  }

  export type SyllabusUpdateToOneWithWhereWithoutModulesInput = {
    where?: SyllabusWhereInput
    data: XOR<SyllabusUpdateWithoutModulesInput, SyllabusUncheckedUpdateWithoutModulesInput>
  }

  export type SyllabusUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutSyllabusNestedInput
  }

  export type SyllabusUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUncheckedUpdateOneWithoutSyllabusNestedInput
  }

  export type TopicUpsertWithWhereUniqueWithoutModuleInput = {
    where: TopicWhereUniqueInput
    update: XOR<TopicUpdateWithoutModuleInput, TopicUncheckedUpdateWithoutModuleInput>
    create: XOR<TopicCreateWithoutModuleInput, TopicUncheckedCreateWithoutModuleInput>
  }

  export type TopicUpdateWithWhereUniqueWithoutModuleInput = {
    where: TopicWhereUniqueInput
    data: XOR<TopicUpdateWithoutModuleInput, TopicUncheckedUpdateWithoutModuleInput>
  }

  export type TopicUpdateManyWithWhereWithoutModuleInput = {
    where: TopicScalarWhereInput
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyWithoutModuleInput>
  }

  export type TopicScalarWhereInput = {
    AND?: TopicScalarWhereInput | TopicScalarWhereInput[]
    OR?: TopicScalarWhereInput[]
    NOT?: TopicScalarWhereInput | TopicScalarWhereInput[]
    id?: StringFilter<"Topic"> | string
    module_id?: StringFilter<"Topic"> | string
    position?: FloatFilter<"Topic"> | number
    title?: StringFilter<"Topic"> | string
    content?: StringNullableFilter<"Topic"> | string | null
    goal?: StringNullableFilter<"Topic"> | string | null
    created_at?: DateTimeFilter<"Topic"> | Date | string
    updated_at?: DateTimeFilter<"Topic"> | Date | string
  }

  export type ModuleCreateWithoutTopicsInput = {
    id?: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutTopicsInput = {
    id?: string
    syllabus_id: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ModuleCreateOrConnectWithoutTopicsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutTopicsInput, ModuleUncheckedCreateWithoutTopicsInput>
  }

  export type TopicResourceCreateWithoutTopicInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    resource?: ResourceCreateNestedOneWithoutTopicResourcesInput
  }

  export type TopicResourceUncheckedCreateWithoutTopicInput = {
    id?: string
    resource_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceCreateOrConnectWithoutTopicInput = {
    where: TopicResourceWhereUniqueInput
    create: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput>
  }

  export type TopicResourceCreateManyTopicInputEnvelope = {
    data: TopicResourceCreateManyTopicInput | TopicResourceCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutTopicInput = {
    id?: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionUncheckedCreateWithoutTopicInput = {
    id?: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateOrConnectWithoutTopicInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput>
  }

  export type SessionCreateManyTopicInputEnvelope = {
    data: SessionCreateManyTopicInput | SessionCreateManyTopicInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutTopicsInput = {
    update: XOR<ModuleUpdateWithoutTopicsInput, ModuleUncheckedUpdateWithoutTopicsInput>
    create: XOR<ModuleCreateWithoutTopicsInput, ModuleUncheckedCreateWithoutTopicsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutTopicsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutTopicsInput, ModuleUncheckedUpdateWithoutTopicsInput>
  }

  export type ModuleUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutTopicsInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceUpsertWithWhereUniqueWithoutTopicInput = {
    where: TopicResourceWhereUniqueInput
    update: XOR<TopicResourceUpdateWithoutTopicInput, TopicResourceUncheckedUpdateWithoutTopicInput>
    create: XOR<TopicResourceCreateWithoutTopicInput, TopicResourceUncheckedCreateWithoutTopicInput>
  }

  export type TopicResourceUpdateWithWhereUniqueWithoutTopicInput = {
    where: TopicResourceWhereUniqueInput
    data: XOR<TopicResourceUpdateWithoutTopicInput, TopicResourceUncheckedUpdateWithoutTopicInput>
  }

  export type TopicResourceUpdateManyWithWhereWithoutTopicInput = {
    where: TopicResourceScalarWhereInput
    data: XOR<TopicResourceUpdateManyMutationInput, TopicResourceUncheckedUpdateManyWithoutTopicInput>
  }

  export type TopicResourceScalarWhereInput = {
    AND?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
    OR?: TopicResourceScalarWhereInput[]
    NOT?: TopicResourceScalarWhereInput | TopicResourceScalarWhereInput[]
    id?: StringFilter<"TopicResource"> | string
    topic_id?: StringFilter<"TopicResource"> | string
    resource_id?: StringNullableFilter<"TopicResource"> | string | null
    created_at?: DateTimeFilter<"TopicResource"> | Date | string
    updated_at?: DateTimeFilter<"TopicResource"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutTopicInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutTopicInput, SessionUncheckedUpdateWithoutTopicInput>
    create: XOR<SessionCreateWithoutTopicInput, SessionUncheckedCreateWithoutTopicInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutTopicInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutTopicInput, SessionUncheckedUpdateWithoutTopicInput>
  }

  export type SessionUpdateManyWithWhereWithoutTopicInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutTopicInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    topic_id?: StringFilter<"Session"> | string
    session_start?: DateTimeFilter<"Session"> | Date | string
    session_end?: DateTimeFilter<"Session"> | Date | string
    meeting_id?: StringFilter<"Session"> | string
    meeting_password?: StringFilter<"Session"> | string
    meeting_url?: StringFilter<"Session"> | string
    meeting_recording?: StringNullableFilter<"Session"> | string | null
    created_at?: DateTimeFilter<"Session"> | Date | string
    updated_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type TopicResourceCreateWithoutResourceInput = {
    id?: string
    created_at?: Date | string
    updated_at?: Date | string
    topic: TopicCreateNestedOneWithoutResourcesInput
  }

  export type TopicResourceUncheckedCreateWithoutResourceInput = {
    id?: string
    topic_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceCreateOrConnectWithoutResourceInput = {
    where: TopicResourceWhereUniqueInput
    create: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput>
  }

  export type TopicResourceCreateManyResourceInputEnvelope = {
    data: TopicResourceCreateManyResourceInput | TopicResourceCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type TopicResourceUpsertWithWhereUniqueWithoutResourceInput = {
    where: TopicResourceWhereUniqueInput
    update: XOR<TopicResourceUpdateWithoutResourceInput, TopicResourceUncheckedUpdateWithoutResourceInput>
    create: XOR<TopicResourceCreateWithoutResourceInput, TopicResourceUncheckedCreateWithoutResourceInput>
  }

  export type TopicResourceUpdateWithWhereUniqueWithoutResourceInput = {
    where: TopicResourceWhereUniqueInput
    data: XOR<TopicResourceUpdateWithoutResourceInput, TopicResourceUncheckedUpdateWithoutResourceInput>
  }

  export type TopicResourceUpdateManyWithWhereWithoutResourceInput = {
    where: TopicResourceScalarWhereInput
    data: XOR<TopicResourceUpdateManyMutationInput, TopicResourceUncheckedUpdateManyWithoutResourceInput>
  }

  export type TopicCreateWithoutResourcesInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    module: ModuleCreateNestedOneWithoutTopicsInput
    sessions?: SessionCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutResourcesInput = {
    id?: string
    module_id: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutResourcesInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutResourcesInput, TopicUncheckedCreateWithoutResourcesInput>
  }

  export type ResourceCreateWithoutTopicResourcesInput = {
    id?: string
    title: string
    description?: string | null
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceUncheckedCreateWithoutTopicResourcesInput = {
    id?: string
    title: string
    description?: string | null
    url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ResourceCreateOrConnectWithoutTopicResourcesInput = {
    where: ResourceWhereUniqueInput
    create: XOR<ResourceCreateWithoutTopicResourcesInput, ResourceUncheckedCreateWithoutTopicResourcesInput>
  }

  export type TopicUpsertWithoutResourcesInput = {
    update: XOR<TopicUpdateWithoutResourcesInput, TopicUncheckedUpdateWithoutResourcesInput>
    create: XOR<TopicCreateWithoutResourcesInput, TopicUncheckedCreateWithoutResourcesInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutResourcesInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutResourcesInput, TopicUncheckedUpdateWithoutResourcesInput>
  }

  export type TopicUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutTopicsNestedInput
    sessions?: SessionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type ResourceUpsertWithoutTopicResourcesInput = {
    update: XOR<ResourceUpdateWithoutTopicResourcesInput, ResourceUncheckedUpdateWithoutTopicResourcesInput>
    create: XOR<ResourceCreateWithoutTopicResourcesInput, ResourceUncheckedCreateWithoutTopicResourcesInput>
    where?: ResourceWhereInput
  }

  export type ResourceUpdateToOneWithWhereWithoutTopicResourcesInput = {
    where?: ResourceWhereInput
    data: XOR<ResourceUpdateWithoutTopicResourcesInput, ResourceUncheckedUpdateWithoutTopicResourcesInput>
  }

  export type ResourceUpdateWithoutTopicResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResourceUncheckedUpdateWithoutTopicResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateWithoutSessionsInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    module: ModuleCreateNestedOneWithoutTopicsInput
    resources?: TopicResourceCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateWithoutSessionsInput = {
    id?: string
    module_id: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    resources?: TopicResourceUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicCreateOrConnectWithoutSessionsInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutSessionsInput, TopicUncheckedCreateWithoutSessionsInput>
  }

  export type TopicUpsertWithoutSessionsInput = {
    update: XOR<TopicUpdateWithoutSessionsInput, TopicUncheckedUpdateWithoutSessionsInput>
    create: XOR<TopicCreateWithoutSessionsInput, TopicUncheckedCreateWithoutSessionsInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutSessionsInput, TopicUncheckedUpdateWithoutSessionsInput>
  }

  export type TopicUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutTopicsNestedInput
    resources?: TopicResourceUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    module_id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: TopicResourceUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type UserCreateWithoutClassStudentsInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    classTeachers?: ClassTeacherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassStudentsInput = {
    id?: string
    company_id?: string | null
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    classTeachers?: ClassTeacherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassStudentsInput, UserUncheckedCreateWithoutClassStudentsInput>
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutClassInput
    company: CompanyCreateNestedOneWithoutClassesInput
    type: ClassTypeCreateNestedOneWithoutClassesInput
    teachers?: ClassTeacherCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    syllabus_id: string
    company_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    teachers?: ClassTeacherUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutClassStudentInput = {
    id?: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutClassStudentInput = {
    id?: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutClassStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput>
  }

  export type AttendanceCreateManyClassStudentInputEnvelope = {
    data: AttendanceCreateManyClassStudentInput | AttendanceCreateManyClassStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutClassStudentsInput = {
    update: XOR<UserUpdateWithoutClassStudentsInput, UserUncheckedUpdateWithoutClassStudentsInput>
    create: XOR<UserCreateWithoutClassStudentsInput, UserUncheckedCreateWithoutClassStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassStudentsInput, UserUncheckedUpdateWithoutClassStudentsInput>
  }

  export type UserUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    classTeachers?: ClassTeacherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classTeachers?: ClassTeacherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutClassNestedInput
    company?: CompanyUpdateOneRequiredWithoutClassesNestedInput
    type?: ClassTypeUpdateOneRequiredWithoutClassesNestedInput
    teachers?: ClassTeacherUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teachers?: ClassTeacherUncheckedUpdateManyWithoutClassNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassStudentInput, AttendanceUncheckedUpdateWithoutClassStudentInput>
    create: XOR<AttendanceCreateWithoutClassStudentInput, AttendanceUncheckedCreateWithoutClassStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassStudentInput, AttendanceUncheckedUpdateWithoutClassStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    class_student_id?: StringFilter<"Attendance"> | string
    description?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    created_at?: DateTimeFilter<"Attendance"> | Date | string
    updated_at?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type UserCreateWithoutClassTeachersInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    company?: CompanyCreateNestedOneWithoutUsersInput
    classStudents?: ClassStudentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutClassTeachersInput = {
    id?: string
    company_id?: string | null
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutClassTeachersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassTeachersInput, UserUncheckedCreateWithoutClassTeachersInput>
  }

  export type ClassCreateWithoutTeachersInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutClassInput
    company: CompanyCreateNestedOneWithoutClassesInput
    type: ClassTypeCreateNestedOneWithoutClassesInput
    students?: ClassStudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeachersInput = {
    id?: string
    syllabus_id: string
    company_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    students?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeachersInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
  }

  export type UserUpsertWithoutClassTeachersInput = {
    update: XOR<UserUpdateWithoutClassTeachersInput, UserUncheckedUpdateWithoutClassTeachersInput>
    create: XOR<UserCreateWithoutClassTeachersInput, UserUncheckedCreateWithoutClassTeachersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassTeachersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassTeachersInput, UserUncheckedUpdateWithoutClassTeachersInput>
  }

  export type UserUpdateWithoutClassTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyUpdateOneWithoutUsersNestedInput
    classStudents?: ClassStudentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutClassTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudents?: ClassStudentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassUpsertWithoutTeachersInput = {
    update: XOR<ClassUpdateWithoutTeachersInput, ClassUncheckedUpdateWithoutTeachersInput>
    create: XOR<ClassCreateWithoutTeachersInput, ClassUncheckedCreateWithoutTeachersInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeachersInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeachersInput, ClassUncheckedUpdateWithoutTeachersInput>
  }

  export type ClassUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutClassNestedInput
    company?: CompanyUpdateOneRequiredWithoutClassesNestedInput
    type?: ClassTypeUpdateOneRequiredWithoutClassesNestedInput
    students?: ClassStudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeachersInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    classStudents?: ClassStudentCreateNestedManyWithoutUserInput
    classTeachers?: ClassTeacherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    classStudents?: ClassStudentUncheckedCreateNestedManyWithoutUserInput
    classTeachers?: ClassTeacherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutCompanyInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutClassInput
    type: ClassTypeCreateNestedOneWithoutClassesInput
    students?: ClassStudentCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutCompanyInput = {
    id?: string
    syllabus_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    students?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutCompanyInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput>
  }

  export type ClassCreateManyCompanyInputEnvelope = {
    data: ClassCreateManyCompanyInput | ClassCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    company_id?: StringNullableFilter<"User"> | string | null
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    address?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_email_verified?: BoolFilter<"User"> | boolean
    is_phone_verified?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutCompanyInput, ClassUncheckedUpdateWithoutCompanyInput>
    create: XOR<ClassCreateWithoutCompanyInput, ClassUncheckedCreateWithoutCompanyInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutCompanyInput, ClassUncheckedUpdateWithoutCompanyInput>
  }

  export type ClassUpdateManyWithWhereWithoutCompanyInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    syllabus_id?: StringFilter<"Class"> | string
    company_id?: StringFilter<"Class"> | string
    type_id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    description?: StringNullableFilter<"Class"> | string | null
    is_active?: BoolFilter<"Class"> | boolean
    created_at?: DateTimeFilter<"Class"> | Date | string
    updated_at?: DateTimeFilter<"Class"> | Date | string
  }

  export type ClassCreateWithoutTypeInput = {
    id?: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    syllabus: SyllabusCreateNestedOneWithoutClassInput
    company: CompanyCreateNestedOneWithoutClassesInput
    students?: ClassStudentCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTypeInput = {
    id?: string
    syllabus_id: string
    company_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    students?: ClassStudentUncheckedCreateNestedManyWithoutClassInput
    teachers?: ClassTeacherUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTypeInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput>
  }

  export type ClassCreateManyTypeInputEnvelope = {
    data: ClassCreateManyTypeInput | ClassCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutTypeInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTypeInput, ClassUncheckedUpdateWithoutTypeInput>
    create: XOR<ClassCreateWithoutTypeInput, ClassUncheckedCreateWithoutTypeInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTypeInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTypeInput, ClassUncheckedUpdateWithoutTypeInput>
  }

  export type ClassUpdateManyWithWhereWithoutTypeInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTypeInput>
  }

  export type ClassStudentCreateWithoutAttendanceInput = {
    id?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutClassStudentsInput
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type ClassStudentUncheckedCreateWithoutAttendanceInput = {
    id?: string
    user_id: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassStudentCreateOrConnectWithoutAttendanceInput = {
    where: ClassStudentWhereUniqueInput
    create: XOR<ClassStudentCreateWithoutAttendanceInput, ClassStudentUncheckedCreateWithoutAttendanceInput>
  }

  export type ClassStudentUpsertWithoutAttendanceInput = {
    update: XOR<ClassStudentUpdateWithoutAttendanceInput, ClassStudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<ClassStudentCreateWithoutAttendanceInput, ClassStudentUncheckedCreateWithoutAttendanceInput>
    where?: ClassStudentWhereInput
  }

  export type ClassStudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: ClassStudentWhereInput
    data: XOR<ClassStudentUpdateWithoutAttendanceInput, ClassStudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type ClassStudentUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassStudentsNestedInput
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type ClassStudentUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentCreateManyClassInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherCreateManyClassInput = {
    id?: string
    user_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassStudentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: AttendanceUncheckedUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassTeachersNestedInput
  }

  export type ClassTeacherUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassStudentCreateManyUserInput = {
    id?: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassTeacherCreateManyUserInput = {
    id?: string
    class_id: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassStudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    attendance?: AttendanceUncheckedUpdateManyWithoutClassStudentNestedInput
  }

  export type ClassStudentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type ClassTeacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassTeacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    class_id?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateManySyllabusInput = {
    id?: string
    position: number
    title: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ModuleUpdateWithoutSyllabusInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutSyllabusInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: TopicUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutSyllabusInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicCreateManyModuleInput = {
    id?: string
    position: number
    title: string
    content?: string | null
    goal?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: TopicResourceUpdateManyWithoutTopicNestedInput
    sessions?: SessionUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resources?: TopicResourceUncheckedUpdateManyWithoutTopicNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: FloatFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    goal?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceCreateManyTopicInput = {
    id?: string
    resource_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionCreateManyTopicInput = {
    id?: string
    session_start: Date | string
    session_end: Date | string
    meeting_id: string
    meeting_password: string
    meeting_url: string
    meeting_recording?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: ResourceUpdateOneWithoutTopicResourcesNestedInput
  }

  export type TopicResourceUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutTopicInput = {
    id?: StringFieldUpdateOperationsInput | string
    session_start?: DateTimeFieldUpdateOperationsInput | Date | string
    session_end?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting_id?: StringFieldUpdateOperationsInput | string
    meeting_password?: StringFieldUpdateOperationsInput | string
    meeting_url?: StringFieldUpdateOperationsInput | string
    meeting_recording?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceCreateManyResourceInput = {
    id?: string
    topic_id: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TopicResourceUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    topic?: TopicUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type TopicResourceUncheckedUpdateWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicResourceUncheckedUpdateManyWithoutResourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    topic_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyClassStudentInput = {
    id?: string
    description: $Enums.AttendanceStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AttendanceUpdateWithoutClassStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutClassStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    photo?: string | null
    gender: $Enums.Gender
    address: string
    role: $Enums.Role
    is_email_verified?: boolean
    is_phone_verified?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassCreateManyCompanyInput = {
    id?: string
    syllabus_id: string
    type_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudents?: ClassStudentUpdateManyWithoutUserNestedInput
    classTeachers?: ClassTeacherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    classStudents?: ClassStudentUncheckedUpdateManyWithoutUserNestedInput
    classTeachers?: ClassTeacherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    address?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_email_verified?: BoolFieldUpdateOperationsInput | boolean
    is_phone_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutClassNestedInput
    type?: ClassTypeUpdateOneRequiredWithoutClassesNestedInput
    students?: ClassStudentUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    type_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateManyTypeInput = {
    id?: string
    syllabus_id: string
    company_id: string
    name: string
    description?: string | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ClassUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    syllabus?: SyllabusUpdateOneRequiredWithoutClassNestedInput
    company?: CompanyUpdateOneRequiredWithoutClassesNestedInput
    students?: ClassStudentUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: ClassStudentUncheckedUpdateManyWithoutClassNestedInput
    teachers?: ClassTeacherUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    syllabus_id?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}