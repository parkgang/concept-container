import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "필수 값 입니다" }),
  // 아래와 같이 `message` 가 지정되지 않은 경우 `zod` 의 기본 에러 메시지가 출력되는 거 같습니다
  // 출력 메시지: Number must be greater than or equal to 10
  age: z.number().min(10),
});

type Schema = z.infer<typeof schema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Schema>({
    // 원래 `resolver: zodResolver(schema)` 코드를 넣어도 똑같이 동작하는데 디버깅시 어떤 값이 떨어지는지 궁금해서 확장하였습니다.
    resolver: async (data, context, options) => {
      // 여기에서 유효성 검사 스키마를 디버깅할 수 있습니다.
      const validationResult = await zodResolver(schema)(
        data,
        context,
        options
      );

      console.log("formData", data);
      console.log("context", context);
      console.log("options", options);
      console.log("validation result", validationResult);

      return validationResult;
    },
  });

  const onSubmit = (data: Schema) => {
    alert(JSON.stringify(data));
  };

  const [isDevToolEnabled, setIsDevToolEnabled] = useState<boolean>(false);
  useEffect(() => {
    setIsDevToolEnabled(true);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        {errors.name?.message && <p>{errors.name?.message}</p>}
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age?.message && <p>{errors.age?.message}</p>}
        <input type="submit" />
      </form>
      {isDevToolEnabled && <DevTool control={control} />}
    </>
  );
}
