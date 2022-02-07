import { Column } from "./Column";

export const Image = () => {
  return (
    <>
      <Column size="1">
        <img src="https://placehold.co/600x400/EEE/31343C"></img>
      </Column>
      <Column size="1">
        <div className="flex items-center justify-self-center self-center align-center">
          <p className="p-4 align-middle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula
            turpis, laoreet sed hendrerit non, mattis ut velit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed id accumsan nisi. Nunc sit amet rutrum ante. Nulla
            rhoncus risus mauris, ut porttitor leo bibendum vehicula. Praesent
            eleifend aliquet nulla, ullamcorper ultrices nibh pellentesque eget.
            Vivamus vitae justo vitae massa sodales hendrerit eu id est. Morbi
            rhoncus quam facilisis quam consequat, eget suscipit lacus suscipit.
            Aenean ut nunc metus. Morbi condimentum eros sed tellus tempor, ut
            porta metus ultrices. Curabitur felis eros, pretium quis turpis nec,
            faucibus hendrerit leo.
          </p>
        </div>
      </Column>
    </>
  );
};
