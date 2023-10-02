// @ts-nocheck
import App from "../../src/App";
import "../../src/index.css";

beforeEach(()=>{
  cy.mount(<App />);
});

describe('App header', () => {
  it('App Should Contain a Header', () => {
    cy.get("header").should("exist").and("have.attr", "id", "header");
  });

  it("App Header should have one h1 element", ()=>{
    cy.get("header").find("h1").should(($h1:any):void=>{
      expect($h1.length, "header contains only 1 h1 element").to.equal(1);
    });
  });

  it("App Header Should have sibling #gallery", ()=>{
    cy.get("header").next().should("have.attr", "id", "gallery");
  });
});

describe("App div with id #gallery", ()=>{
  it("there should be a class called .gallery", ()=>{
    cy.get("#gallery").should("exist");
  });

  it("#gallery class should have children with alt of 'nekosuke'", ()=>{
    cy.get("#gallery").children("[alt='nekosuke']").should("exist");
  });

  it("number of img tags should be 9", ()=>{
    cy.get("#gallery").find("[alt='nekosuke']").should(($val:any):any=>{
      assert.equal($val.length, 9, "number of img tags should be 9");
    });
  });
});