export const H2WithImage = (props: { class?: string | string; title: string; style?: string }) => {

  return (
    <>
      <img loading="lazy" class="pb-2 pt-80px md:pt-120px flex flex-justify-center mx-auto" style={props.style} src="/assets/heading-ic.png" />
      <h2 class={props.class}>{props.title}</h2>
    </>
  );
};