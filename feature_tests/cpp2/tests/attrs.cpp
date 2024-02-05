#include <iostream>
#include "../include/AttrOpaque1Renamed.hpp"
#include "assert.hpp"

int main(int argc, char *argv[]) {
    std::unique_ptr<AttrOpaque1Renamed> r = AttrOpaque1Renamed::totally_not_new();
    simple_assert_eq("method should call", r->method_renamed(), 77);
    simple_assert_eq("method should call", r->crenamed(), 123);

    // These C names should also resolve
    void* renamed = (void*)capi::renamed_in_c_only;
    std::cout<<"Renamed function at "<<renamed<<std::endl;
    renamed = (void*)capi::namespace_AttrOpaque1_method;
    std::cout<<"Renamed function at "<<renamed<<std::endl;
}