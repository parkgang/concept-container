import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // 이름을 전달하여 입력 값을 확인합니다.

  return (
    /* "handleSubmit"은 "onSubmit"을 호출하기 전에 입력을 검증합니다 */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* "등록" 기능을 호출하여 후크에 입력을 등록합니다. */}
      <input defaultValue="test" {...register("example")} />

      {/* 필수 또는 기타 표준 HTML 유효성 검사 규칙이 포함된 유효성 검사 포함 */}
      <input {...register("exampleRequired", { required: true })} />
      {/* 필드 유효성 검사가 실패하면 오류가 반환됩니다. */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
