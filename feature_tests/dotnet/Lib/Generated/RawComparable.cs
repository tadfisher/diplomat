// <auto-generated/> by Diplomat

#pragma warning disable 0105
using System;
using System.Runtime.InteropServices;

using DiplomatFeatures.Diplomat;
#pragma warning restore 0105

namespace DiplomatFeatures.Raw;

#nullable enable

[StructLayout(LayoutKind.Sequential)]
public partial struct Comparable
{
    private const string NativeLib = "diplomat_feature_tests";

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_Comparable_new", ExactSpelling = true)]
    public static unsafe extern Comparable* NamespaceNew(byte int);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_Comparable_cmp", ExactSpelling = true)]
    public static unsafe extern sbyte NamespaceCmp(Comparable* self, Comparable* other);

    [DllImport(NativeLib, CallingConvention = CallingConvention.Cdecl, EntryPoint = "namespace_Comparable_destroy", ExactSpelling = true)]
    public static unsafe extern void Destroy(Comparable* self);
}
